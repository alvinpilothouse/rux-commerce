<template>
  <div class="bg-[#f5f5ed] z-50 w-full h-[74px] fixed bottom-0 drop-shadow-2xl left-0">
    <div class="container mx-auto flex justify-between">
      <div class="flex py-2">
        <LazyNuxtImage
          :src="variantImage.src"
          sizes="sm:100vw md:50vw lg:50vw"
          quality="80"
          fit="cover"
          loading="lazy"
          width="60"
        />
        <div class="ml-5">
          <p>{{ selectedProduct.title }}</p>
          <p>{{ selectedVariant.price }}</p>
        </div>
      </div>
      <div class="grid content-center">
        <div class="flex">
          <select
            class="form-select form-select-lg mb-3 bg-[#f5f5ed] appearance-none block w-[250px] px-4 py-2 bg-clip-padding bg-no-repeat border border-solid border-[#d9dd08] transition ease-in-out m-0 focus:border-[#d9dd08] focus:outline-none"
            aria-label=".form-select-lg example"
            v-model="selected"
            @change="onSelectVariantHandler"
          >
            <option v-for="(variant, i) in variants" :key="i">
              {{ variant }}
            </option>
          </select>
          <FieldsInputCounter class="bg-[#f5f5ed] ml-5" />
          <ButtonsCustomButton
            v-if="selectedVariant.inventory_quantity <= 0"
            text="NOTIFY ME WHEN AVAILABLE"
            class="py-1 w-auto h-[40px] px-8 text-sm ml-5 font-semibold hover:bg-[#f5f5ed] transition ease-in-out"
          />
          <ButtonsCustomButton
            v-else
            text="ADD TO CART"
            class="py-1 w-auto h-[40px] px-8 text-sm ml-5 font-semibold hover:bg-[#f5f5ed] transition ease-in-out"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters: mapProductGetters } = createNamespacedHelpers("product");

export default {
  methods: {
    onSelectVariantHandler(e) {
      console.log(e.target.value);
    },
  },
  computed: {
    ...mapProductGetters(["selectedProduct", "selectedVariant"]),
    selected() {
      return this.selectedVariant.title;
    },
    variants() {
      return this.selectedProduct.options[0].values;
    },
    variantImage() {
      return this.selectedProduct.images.find(
        (image) => image.id === this.selectedVariant.image_id
      );
    },
  },
};
</script>
