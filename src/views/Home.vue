<template>
  <main>
    <section class="home-grid content">
      <main class="home-grid-center">
        <div class="home-title-box">
          <h1 class="home-title">{{ application.subtitle }}</h1>
          <button class="action-button">
            {{ $t('actions.start_exploring') }}
          </button>
        </div>
      </main>
      <Waves />
    </section>
    <section class="home-bottom content">
      <main class="home-bottom-center home-three-columns">
        <div class="home-three-columns-first">
          <BaseCard
            :main="resources.buoy_data_viewer.name"
            :icon="['fas', 'water']"
            :category="resources.data.narr_bay"
            :description="resources.buoy_data_viewer.description"
          />
        </div>
        <div class="home-three-columns-second">
          <BaseCard
            :main="resources.erddap.name"
            :icon="['fas', 'flask']"
            :category="resources.data.water"
            :description="resources.erddap.description"
          />
        </div>
        <div class="home-three-columns-third">
          <BaseCard
            :main="resources.omero.name"
            :icon="['fas', 'camera-retro']"
            :category="resources.data.image"
            :description="resources.omero.description"
          />
        </div>
      </main>
    </section>
    <section class="map-grid content">
      <aside class="map-grid-side">
        <h1 class="has-text-success">{{ resources.buoy_locations.name }}</h1>
        <h4 class="has-text-dark">
          {{ resources.buoy_locations.description }}
        </h4>
        <p>
          {{ resources.buoy_locations.text }}
          <span
            ><a
              :href="resources.buoy_locations.source"
              class="small has-text-primary"
              >Source</a
            ></span
          >
        </p>
        <button class="button is-primary" @click="toggleView">
          <span v-if="!showTable">Switch to Table View</span>
          <span v-else>Switch to Map View</span>
        </button>
      </aside>
      <BuoyTable v-if="showTable" class="map-grid-main" />
      <Map v-else class="map-grid-main" />
    </section>
    <section class="footer-grid">
      <BaseFooter class="footer-grid-section-b" />
    </section>
  </main>
</template>

<script>
import { mapState } from 'vuex'
import Waves from '@/components/Waves'
import Map from '@/components/Map'
import BuoyTable from '@/components/BuoyTable'

export default {
  computed: mapState(['application', 'resources']),
  data: function() {
    return {
      showTable: false
    }
  },
  components: {
    Waves,
    Map,
    BuoyTable
  },
  methods: {
    toggleView() {
      this.showTable = !this.showTable
    }
  }
}
</script>
