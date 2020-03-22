<template>
  <div>
    <MglMap
      :accessToken="accessToken"
      :mapStyle.sync="mapStyle"
      :center.sync="mapCenter"
      :zoom="9"
      :minZoom="9"
    >
      <div v-for="(point, index) in resources.buoy.data" v-bind:key="index">
        <MglMarker :coordinates="[point.longitude, point.latitude]">
          <BuoyIcon slot="marker" class="icon" />
        </MglMarker>
      </div>
    </MglMap>
  </div>
</template>

<script>
import BuoyIcon from '@/assets/illustrations/buoy-marker.svg'
import { mapState } from 'vuex'
import Mapbox from 'mapbox-gl'
import { MglMap, MglMarker } from 'vue-mapbox'

export default {
  components: {
    MglMap,
    MglMarker,
    BuoyIcon
  },
  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox
  },
  mounted() {
    // add event listener for prefers-color-scheme
    let mql = window.matchMedia('(prefers-color-scheme: dark)')
    const onMediaChange = e => this.onMediaChange(e)
    mql.addEventListener('change', function(e) {
      onMediaChange(e)
    })
  },
  data() {
    return {
      mapCenter: [-71.374022, 41.577553],
      accessToken: process.env.VUE_APP_MAPBOX_ACCESS_TOKEN, // access token. Needed if you using Mapbox maps
      darkScheme: !window.matchMedia('(prefers-color-scheme: dark)')
    }
  },
  computed: {
    ...mapState(['resources']),
    mapStyle: function() {
      return this.darkScheme
        ? process.env.VUE_APP_MAP_STYLE_DARK
        : process.env.VUE_APP_MAP_STYLE_LIGHT
    }
  },
  methods: {
    onMediaChange(e) {
      if (e.matches) {
        this.darkScheme = true
      } else {
        this.darkScheme = false
      }
    }
  }
}
</script>
