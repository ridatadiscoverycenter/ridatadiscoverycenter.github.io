<template>
  <section class="section-grid content">
    <main class="section-grid-center">
      <h1>{{ resources.buoy_data_viewer.name }}</h1>
    </main>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['resources'])
}
</script>
