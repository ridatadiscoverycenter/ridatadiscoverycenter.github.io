<template>
  <section class="content">
    <div class="about-grid">
      <header class="about-grid-top">
        <NarrSvg class="about-map" />
      </header>
      <section class="about about-grid-middle">
        <main class="about-text">
          <h2 class="has-text-primary">
            About the Rhode Island Data Discovery Center
          </h2>
          <p>{{ about.text }}</p>
        </main>
      </section>
      <section class="leads about-grid-bottom">
        <h2 class="has-text-primary">Leadership</h2>
        <div class="people-cards">
          <div
            class="person-card card"
            v-for="(person, index) in about.leads.leads"
            v-bind:key="index"
          >
            <div class="card-header">
              <h4 class="card-header-title has-text-success">
                {{ person.name }}
              </h4>
            </div>
            <div class="card-content">
              <h6 class="card-content-description">{{ person.title }}</h6>
              <h6 class="card-content-description">{{ person.institution }}</h6>
            </div>
          </div>
        </div>
      </section>
      <section class="download-container">
        <main class="about-text">
          <h2 class="has-text-primary">
            Data Acceptance Guidelines
          </h2>
          <p>
            Contact us if you want us to host your Narragansett Bay related
            data! See our data acceptance guidelines
            <a href="./files/riddc_data_guidelines.pdf" target="_blank">
              here <font-awesome-icon icon="file-pdf" />.</a
            >
          </p>
        </main>
      </section>
    </div>

    <BaseFooter />
  </section>
</template>

<script>
import { mapState } from 'vuex'
import NarrSvg from '@/assets/illustrations/narrbay.svg'
export default {
  components: {
    NarrSvg
  },
  computed: mapState(['application', 'about'])
}
</script>
