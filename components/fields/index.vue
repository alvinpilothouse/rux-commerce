<template>
  <div>
    <div class="relative mb-6">
      <div
        class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
      >
        <slot name="icon"></slot>
      </div>
      <input
        type="text"
        id="input-group-1"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full pl-10 p-2.5"
        :class="className"
        :placeholder="label"
        :style="inputStyle"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    inputStyle: {
      type: Object,
    },
    className: {
      type: String,
    },
    label: {
      type: String,
      default: "",
    },
  },
};
</script>
