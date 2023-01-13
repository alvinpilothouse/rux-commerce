<template>
  <div
    class="w-screen announcement-bar flex items-center"
    :style="{
      height: `${height}px`,
    }"
  >
    <div class="w-screen">
      <div class="active carousel-item relative float-left w-full">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style>
.announcement-bar {
  background-color: #d9dd08;
  width: 100%;
}
.text-announcement {
  color: #000000;
  font-family: SuisseIntl, Helvetica Neue, Helvetica, Arial;
}
</style>
