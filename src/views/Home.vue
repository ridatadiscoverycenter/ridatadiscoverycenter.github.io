<template>
  <main>
    <section class="home-grid content">
      <main class="home-grid-center">
        <div class="home-title-box">
          <h1 class="home-title">{{ application.subtitle }}</h1>
          <a href="#" v-scroll-to="'#start-exploring'" class="action-button">
            {{ $t('actions.start_exploring') }}
          </a>
        </div>
      </main>
      <figure>
        <img
          class="waves"
          src="@/assets/illustrations/waves-small.png"
          alt="Waves Art"
          style="width: 100%"
        />
      </figure>
    </section>
    <section id="start-exploring" class="home-bottom content">
      <BaseCard
        class="data-card"
        :main="resources.buoy_data_viewer.name"
        :icon="['fas', 'water']"
        :description="resources.buoy_data_viewer.description"
        :url="resources.buoy_data_viewer.url"
        :second="resources.buoy_data_viewer.second"
        :secondUrl="resources.buoy_data_viewer.secondUrl"
      />
      <BaseCard
        class="data-card"
        :main="resources.erddap.name"
        :icon="['fas', 'water']"
        :description="resources.erddap.description"
        :url="resources.erddap.url"
      />
      <BaseCard
        class="data-card"
        :main="resources.plankton.name"
        :icon="['fas', 'calendar-week']"
        :description="resources.plankton.description"
        :url="resources.plankton.url"
        :second="resources.plankton.second"
        :secondUrl="resources.plankton.secondUrl"
      />
      <BaseCard
        class="data-card"
        :main="resources.jupyterbook.name"
        :icon="['fas', 'water']"
        :description="resources.jupyterbook.description"
        :url="resources.jupyterbook.url"
      />
      <BaseCard
        class="data-card"
        :main="resources.osom.name"
        :icon="['fas', 'water']"
        :description="resources.osom.description"
        :url="resources.osom.url"
        :second="resources.osom.second"
        :secondUrl="resources.osom.secondUrl"
        :third="resources.osom.third"
        :thirdUrl="resources.osom.thirdUrl"
        :beta="resources.osom.beta"
      />
      <BaseCard
        class="data-card"
        :main="resources.fish_trawl.name"
        :icon="['fas', 'calendar-week']"
        :description="resources.fish_trawl.description"
        :url="resources.fish_trawl.url"
        :second="resources.fish_trawl.second"
        :secondUrl="resources.fish_trawl.secondUrl"
      />
      <BaseCard
        class="data-card"
        :main="resources.bay_viewer.name"
        :icon="['fas', 'calendar-week']"
        :description="resources.bay_viewer.description"
        :url="resources.bay_viewer.url"
      />
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
    <BaseFooter />
  </main>
</template>

<script>
import { mapState } from 'vuex'
import Map from '@/components/Map'
import BuoyTable from '@/components/BuoyTable'

export default {
  computed: mapState(['application', 'resources']),
  data: function () {
    return {
      showTable: false,
    }
  },
  components: {
    Map,
    BuoyTable,
  },
  methods: {
    toggleView() {
      this.showTable = !this.showTable
    },
  },
}
</script>
