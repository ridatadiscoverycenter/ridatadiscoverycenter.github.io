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
        <h3 class="has-text-dark">
          {{ resources.buoy_locations.description }}
        </h3>
      </aside>
      <Map class="map-grid-map" />
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

export default {
  computed: mapState(['application', 'resources']),
  components: {
    Waves,
    Map
  }
}
</script>
