<template>
  <div class="flex justify-center">
    <NuxtLink :to="`${$route.params.view_all_handle}/products/${handle}`">
      <div class="border bg-white max-w-sm hover:border-2 hover:border-blue-100">
        <div class="flex justify-center p-5">
          <span
            class="jbw-font h-6 px-3 py-1 justify-center border border-red-500 text-red-500 font-semibold text-xs flex align-center"
          >
            20% OFF
          </span>
        </div>
        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
          <LazyNuxtImage
            :src="productImage"
            sizes="sm:100vw md:50vw lg:50vw"
            quality="80"
            fit="cover"
            loading="lazy"
            width="60"
          />
        </a>
        <div class="p-6 text-center">
          <h5 class="text-gray-900 mb-2 card-title">{{ title }}</h5>
          <p class="text-gray-400 text-xs -mt-2 card-subtitle uppercase">12 Diamonds</p>
          <p class="text-black mt-3 mb-4 product-price uppercase jbw-font">$20</p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    productImage: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "Title",
    },
    handle: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
.card-title {
  font-family: TiemposFine;
  font-size: 20px;
}

.card-subtitle {
  font-family: SuisseIntl, Helvetica Neue, Helvetica, Arial;
  font-size: 13px;
}

.product-price {
  font-family: SuisseIntl, Helvetica Neue, Helvetica, Arial;
  font-size: 18px;
  font-weight: 500;
}
</style>
