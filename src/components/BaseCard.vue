<template>
  <div class="card is-flex is-flex-direction-column is-align-items-stretch">
    <div class="card-content is-flex-grow-4">
      <p class="title">
        {{ main }}
      </p>
      <span v-show="beta" class="tag is-warning has-text-black">beta</span>
      <p class="card-content-description">{{ description }}</p>
    </div>
    <footer class="card-footer">
      <p class="card-footer-item">
        <span>
          <a :href="url"
            >{{ main }}
            <font-awesome-icon icon="external-link-alt" />
          </a>
        </span>
      </p>
      <p v-if="second" class="card-footer-item">
        <span>
          <a :href="secondUrl"
            >{{ second }}
            <font-awesome-icon icon="external-link-alt" />
          </a>
        </span>
      </p>
      <p v-if="third" class="card-footer-item">
        <span>
          <a :href="thirdUrl"
            >{{ third }}
            <font-awesome-icon icon="external-link-alt" />
          </a>
        </span>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    main: {
      type: String,
      required: true,
    },
    second: {
      type: String,
      required: false,
    },
    third: {
      type: String,
      required: false,
    },
    icon: {
      type: Array,
      required: false,
    },
    url: {
      type: String,
      required: false,
    },
    secondUrl: {
      type: String,
      required: false,
    },
    thirdUrl: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    beta: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
