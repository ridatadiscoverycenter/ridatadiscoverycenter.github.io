<template>
  <div>
    <main id="app" class="application-grid">
      <BaseNavbar class="application-grid-header" />
      <section>
        <transition name="slide-fade" mode="out-in">
          <router-view />
        </transition>
      </section>
    </main>
  </div>
</template>

<script></script>
<style lang="sass">
.slide-fade-enter
  transform: translateX(10px)
  opacity: 0

.slide-fade-enter-active,
.slide-fade-leave-active
  transition: all 0.2s ease


.slide-fade-leave-to
  transform: translateX(-10px)
  opacity: 0
</style>
