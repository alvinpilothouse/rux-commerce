<template>
  <img :src="ruxColorLogo" class="w-auto mt-0" :class="className" alt="..." />
</template>

<script>
export default {
  props: {
    color: {
      type: String,
    },
    className: {
      type: String,
    },
  },

  computed: {
    ruxColorLogo() {
      return this.color === "white"
        ? "https://v.fastcdn.co/u/07223e10/62759947-0-rsz-white-180x.png"
        : "https://v.fastcdn.co/u/07223e10/62759771-0-rsz-3black-180x.png";
    },
  },
};
</script>
