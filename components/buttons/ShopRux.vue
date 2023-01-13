<template>
  <button
    type="button"
    class="w-[210px] h-14 text-center inline-block text-black font-semibold text-base leading-normal border-2 border-[#d9dd08] bg-[#d9dd08] hover:bg-[#f5f5ed] hover:text-black transition duration-200 ease-in-out"
    v-text="text"
    @click="clickHandler"
  ></button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
    },
  },

  data: () => ({
    color: "#d9dd08",
  }),

  methods: {
    clickHandler() {
      this.$router.push("/products/rux-70l");
    },
  },
};
</script>
