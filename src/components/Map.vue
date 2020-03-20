<template>
  <MglMap
    :accessToken="accessToken"
    :mapStyle.sync="mapStyle"
    :center.sync="mapCenter"
    :zoom="9"
  >
  </MglMap>
</template>

<script>
import Mapbox from 'mapbox-gl'
import { MglMap } from 'vue-mapbox'

export default {
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
  components: {
    MglMap
  },
  data() {
    return {
      mapCenter: [-71.374022, 41.577553],
      accessToken: process.env.VUE_APP_MAPBOX_ACCESS_TOKEN, // access token. Needed if you using Mapbox maps
      darkScheme: !window.matchMedia('(prefers-color-scheme: dark)')
    }
  },
  computed: {
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
