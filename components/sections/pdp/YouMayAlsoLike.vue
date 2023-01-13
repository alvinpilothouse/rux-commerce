<template>
  <div>
    <h1 class="text-5xl font-semibold">You may also like</h1>
    <div class="py-3 grid grid-cols-4">
      <CardsProductHoverActions
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        :hover-src="item.hoverSrc"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: "RUX BAG",
        price: 80,
        src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-Website-Mega-Menu-Bag_360x.jpg?v=1671661812",
        hoverSrc:
          "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-Bag-Clothes_WebP_360x.webp?v=1671661812",
      },
      {
        title: "RUX POCKET",
        price: 40,
        src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-Website-Mega-Menu-Bag_360x.jpg?v=1671661812",
        hoverSrc:
          "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-Bag-Clothes_WebP_360x.webp?v=1671661812",
      },
      {
        title: "UTILITY STRAPS (PAIR)",
        price: 20,
        src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-Website-Mega-Menu-Bag_360x.jpg?v=1671661812",
        hoverSrc:
          "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-Bag-Clothes_WebP_360x.webp?v=1671661812",
      },
    ],
  }),
};
</script>

<style>
</style>