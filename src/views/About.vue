<template>
  <section class="content">
    <section class="about">
      <header>
        <h1>About</h1>
      </header>
      <main>
        <p>{{ about.text }}</p>
      </main>
    </section>
    <section class="leads">
      <div v-for="(person, index) in about.leads.leads" v-bind:key="index">
        <h4 class="title">{{ person.name }}</h4>
        <p class="subtitle">{{ person.title }}</p>
        <p>{{ person.institution }}</p>
      </div>
    </section>
    <BaseFooter />
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState(['application', 'about'])
}
</script>
