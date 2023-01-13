<template>
  <div>
    <h1 class="text-gray-900 text-3xl title-font font-bold mb-1">
      {{ selectedProduct.title }}
    </h1>
    <div class="flex mb-4 mt-5">
      <span class="flex items-center">
        <LazyRatings
          v-model="rating"
          :increment="0.5"
          :star-size="18"
          :show-rating="false"
          active-color="#000000"
        />
        <span class="text-gray-600 ml-3 mt-1">({{ rating }})</span>
      </span>
    </div>
    <div
      class="mt-5 text-black list-disc"
      v-html="selectedProduct.body_html"
      style="line-height: 2rem"
    ></div>
    <div class="mt-[1rem]">
      <span class="title-font font-medium text-2xl text-gray-900"
        >${{ selectedVariant.price }}</span
      >
    </div>
    <div class="flex mt-6 items-center pb-5">
      <div class="flex">
        <button
          v-for="(variant, i) in selectedProduct.variants"
          class="mr-4 w-10 h-10 focus:outline-none hover:border-[5px] hover:border-white transition ease-in-out"
          :class="{
            'border-[5px]': selectedVariant.position === i + 1,
            'border-white': selectedVariant.position === i + 1,
          }"
          :style="{
            backgroundColor: variantColor(variant.position),
          }"
          style="box-sizing: border-box"
          @click="selectVariantHandler(variant)"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          :title="variant.title"
        >
          <p v-if="variant.inventory_quantity <= 0" class="text-white rotate-45">|</p>
        </button>
      </div>
    </div>
    <div>
      <span class="font-bold"> Order before 5pm PST & we’ll ship the next day. </span>
    </div>
    <div class="mt-5 flex">
      <div class="mt-1">
        <FieldsInputCounter />
      </div>
      <LazyButtonsCustomButton
        v-if="selectedVariant.inventory_quantity <= 0"
        text="NOTIFY ME WHEN AVAILABLE"
        class="py-1 w-full h-[40px] ml-2 mt-1 font-bold border-[1px] border-black hover:bg-[#f5f5ed] transition ease-in-out"
      />
      <LazyButtonsCustomButton
        v-else
        text="ADD TO CART"
        class="py-1 w-full h-[40px] ml-2 mt-1 font-bold border-[1px] border-black hover:bg-[#f5f5ed] transition ease-in-out"
      />
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions: mapProductActions } = createNamespacedHelpers("product");

export default {
  props: {
    selectedProduct: {
      type: Object,
    },
    selectedVariant: {
      type: Object,
    },
  },

  data: () => ({
    rating: 3.5,
  }),

  methods: {
    ...mapProductActions(["setCurrentVariant"]),
    variantColor(position) {
      if (position === 1) return "#cabe96";
      if (position === 2) return "#495523";
      if (position === 3) return "#000000";
      if (position === 4) return "#e0e0e0";
    },
    selectVariantHandler(variant) {
      this.setCurrentVariant(variant.position - 1);
      this.$router.push({
        path: this.$route.fullPath,
        query: { variant: variant.id },
      });
    },
  },

  created() {
    this.setCurrentVariant(0);
  },
};
</script>
