<template>
  <div>
    <MglMap
      class="table-wrapper"
      :accessToken="accessToken"
      :mapStyle.sync="mapStyle"
      :center.sync="mapCenter"
      :zoom="9"
      :minZoom="9"
    >
      <div v-for="(point, index) in resources.buoy.data" v-bind:key="index">
        <MglMarker :coordinates="[point.longitude, point.latitude]">
          <font-awesome-icon slot="marker" icon="circle" :color="markerColor" />
          <MglPopup>
            <VCard>
              <div class="">
                <div class="">
                  <div class="media">
                    <BuoyIcon class="buoy-icon" />
                    <div class="media-content">
                      <p class="title is-4">{{ point.name }}</p>
                      <p class="subtitle">
                        <span class="buoy-labels"
                          >label: {{ point.label }}</span
                        >
                        <span class="buoy-labels"
                          >BART: {{ point.BART_label }}</span
                        >
                      </p>
                    </div>
                  </div>

                  <div class="content buoy-info">
                    <p class="buoy-descriptor">
                      <strong>type: </strong>{{ point.station_type }}
                    </p>
                    <p class="buoy-descriptor">
                      <strong>owner: </strong>{{ point.owner }}
                    </p>
                    <p class="buoy-descriptor">
                      <strong>operator: </strong>{{ point.operator }}
                    </p>
                    <p class="buoy-descriptor">
                      <strong>season: </strong>{{ point.season }}
                    </p>
                    <br />
                    <time>{{ point.dates_stabilisehd }}</time>
                  </div>
                </div>
              </div>
            </VCard>
          </MglPopup>
        </MglMarker>
      </div>
    </MglMap>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Mapbox from 'mapbox-gl'
import { MglMap, MglMarker, MglPopup } from 'vue-mapbox'
import BuoyIcon from '@/assets/illustrations/buoy-marker.svg'
export default {
  components: {
    MglMap,
    MglMarker,
    MglPopup,
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
      darkScheme: window.matchMedia('(prefers-color-scheme: dark)')
        ? true
        : false,
      markerColor: window.matchMedia('(prefers-color-scheme: dark)')
        ? '#FEBE80'
        : '#025E73'
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
        this.markerColor = '#FEBE80'
      } else {
        this.darkScheme = false
        this.markerColor = '#025E73'
      }
    }
  }
}
</script>
