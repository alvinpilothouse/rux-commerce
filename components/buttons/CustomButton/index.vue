<template>
  <button
    :class="className"
    :style="{ ...buttonStyle, backgroundColor: color }"
    @click="clickedHandler"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
    },
    buttonStyle: {
      type: Object,
    },
    text: { type: String },
    color: {
      type: String,
      default: "#d9dd08",
    },
  },

  methods: {
    clickedHandler() {
      this.$emit("click");
    },
  },
};
</script>
