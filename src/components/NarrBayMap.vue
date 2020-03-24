<template>
  <div>
    <MglMap
      class="table-wrapper"
      :accessToken="accessToken"
      :mapStyle.sync="mapStyle"
      :center.sync="mapCenter"
      @load="onMapLoad"
      :zoom="10"
      :pitch="60"
    >
    </MglMap>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Mapbox from 'mapbox-gl'
import { MglMap } from 'vue-mapbox'
export default {
  components: {
    MglMap
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
      mapCenter: [-71.440629, 41.584463], //[-71.416503, 41.725952],
      accessToken: process.env.VUE_APP_MAPBOX_ACCESS_TOKEN, // access token. Needed if you using Mapbox maps
      darkScheme: window.matchMedia('(prefers-color-scheme: dark)').matches
    }
  },
  computed: {
    ...mapState(['resources']),
    markerColor: function() {
      return this.darkScheme ? '#FEBE80' : '#025E73'
    },
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
        this.markerColor = '#FEBE80'
      } else {
        this.darkScheme = false
        this.markerColor = '#025E73'
      }
    }
  }
}
</script>
