<template>
  <nuxt-img
    preload
    :provider="provider"
    :src="src"
    :sizes="sizes"
    :quality="quality"
    :fit="fit"
    loading="lazy"
    @click="clickHandler"
    @load="doSomethingOnLoad"
  />
</template>

<script>
// Placeholder
const placeholder = require("@/assets/image/placeholder.jpg");

export default {
  props: {
    provider: {
      type: String,
      default: "static",
    },
    src: {
      type: String,
      default: () => import("@/assets/_common/constants/imagePlaceHolder"),
    },
    sizes: {
      type: String,
      default: "sm:100vw md:50vw lg:50vw",
    },
    quality: {
      type: String,
      default: "80",
    },
    fit: {
      type: String,
      default: "cover",
    },
  },

  data: () => ({
    placeholder,
  }),

  methods: {
    doSomethingOnLoad() {
      this.$emit("load");
    },
    clickHandler() {
      this.$emit("click");
    },
  },
};
</script>
