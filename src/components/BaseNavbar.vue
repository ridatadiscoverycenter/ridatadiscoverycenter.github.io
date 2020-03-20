<template>
  <nav
    class="navbar is-transparent"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <BaseLogo />
        <span>{{ application.title }}</span>
      </a>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <router-link class="navbar-item" to="/">Home</router-link>
        <router-link class="navbar-item" to="/about">About</router-link>
        <router-link class="navbar-item" to="/resources">Resources</router-link>
        <router-link class="navbar-item" to="/map">Map</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState(['application'])
}
</script>
