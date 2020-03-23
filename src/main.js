import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import VueScrollTo from 'vue-scrollto'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCameraRetro,
  faMicroscope,
  faFlask,
  faMapMarkerAlt,
  faWater,
  faExternalLinkAlt,
  faCircle,
  faEnvelope,
  faCopyright
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCameraRetro)
library.add(faMicroscope)
library.add(faFlask)
library.add(faMapMarkerAlt)
library.add(faWater)
library.add(faExternalLinkAlt)
library.add(faCircle)
library.add(faEnvelope)
library.add(faCopyright)

Vue.component('font-awesome-icon', FontAwesomeIcon)

// Global registration for components starting with Base
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )

  Vue.component(componentName, componentConfig.default || componentConfig)
})

Vue.config.productionTip = false

Vue.use(VueScrollTo, {
  container: 'body',
  duration: 500,
  easing: 'ease',
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
