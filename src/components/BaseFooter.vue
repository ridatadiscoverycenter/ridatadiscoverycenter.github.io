<template>
  <footer>
    <p class="container">{{ funding }}</p>
  </footer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['funding', 'application'])
}
</script>

<style></style>
