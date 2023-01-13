<template>
  <div>
    <LazyYoutube :src="src" />
  </div>
</template>

<script>
export default {
  name: "YourComponent",
  components: {
    [process.browser && "lazy-youtube"]: () => import("vue-lazytube"),
  },
  props: {
    src: {
      type: String,
    },
  },
};
</script>
