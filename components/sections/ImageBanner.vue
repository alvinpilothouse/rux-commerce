<template>
  <div
    class="image"
    :style="{ 'background-image': `url('${backgroundImage}')` }"
    style="margin-top: -70px; height: 488px; width: 100%"
  >
    <div class="card-overlay">
      <h1 class="text-white image-caption">{{ title }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    backgroundImage: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
.card-overlay {
  background: rgba(0, 0, 0, 0.1);
  height: 488px;
  width: 100%;
}
.image {
  background-size: cover;
  background-position: center;
}
.image-caption {
  position: absolute;
  top: 387px;
  left: 90px;
  font-size: 54px;
}
</style>
