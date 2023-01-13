<template>
  <fa :class="iconClass" :icon="['fa', icon]" />
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: ''
    },
    iconClass: {
      type: String,
      default: ''
    }
  }
}
</script>
