<template>
  <div class="product-specification bg-stone-100">
    <span class="text-sm uppercase text-black">PRODUCT SPECIFICATIONS</span>
    <div class="grid grid-cols-1 divide-y mt-7">
      <div
        v-for="(spec, i) in specifications"
        :key="i"
        class="flex justify-between py-5"
      >
        <span class="text-sm text-gray-400">
          {{ getString(spec, "property") | startCase }}
        </span>
        <span class="text-sm" v-text="getString(spec, 'value')" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    specifications: {
      type: Array,
    },
  },

  methods: {
    getString(str, data) {
      return str.split(":")[data === "value" ? 1 : 0];
    },
  },
};
</script>

<style>
.product-specification {
  padding: 5em;
}
</style>
