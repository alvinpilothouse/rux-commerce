<template>
  <button
    type="button"
    class="h-200 mb-2 mt-5 w-full inline-block py-5 bg-black text-white font-medium text-base leading-normal border border-black hover:bg-white hover:text-black transition duration-200 ease-in-out"
    v-text="text"
  ></button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Button",
    },
  },
};
</script>
