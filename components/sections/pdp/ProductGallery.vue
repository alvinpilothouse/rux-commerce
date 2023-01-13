<template>
  <div>
    <div class="p-8 bg-white">
      <LazyNuxtImage
        :src="bannerImage"
        sizes="sm:100vw md:50vw lg:50vw"
        quality="80"
        fit="cover"
        loading="lazy"
      />
    </div>
    <div class="product-thumbnails">
      <ul>
        <li
          v-for="(product, index) in selectedProduct.images"
          :class="[activeClass == index ? 'thumbnail-active' : '']"
          :key="index"
        >
          <LazyNuxtImage
            :src="product.src"
            sizes="sm:100vw md:50vw lg:50vw"
            quality="80"
            fit="cover"
            loading="lazy"
            @click="currentThumnail(product.src, index)"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// default image
import imagePlaceHolder from "@/assets/_common/constants/imagePlaceHolder";
export default {
  props: {
    selectedProduct: {
      type: Object,
    },
  },

  data: () => ({
    activeClass: 0,
    bannerImage: imagePlaceHolder,
  }),

  methods: {
    currentThumnail: function (image, index) {
      this.bannerImage = image;
      this.activeClass = index;
    },
  },

  created() {
    this.bannerImage = this.selectedProduct.image.src;
  },
};
</script>
