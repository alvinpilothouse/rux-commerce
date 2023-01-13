<template>
  <div>
    <span class="text-xl">Bundle & Save 7%</span>
    <div class="bundle_discount flex items-center mt-1 text-red-600">
      <svg
        class="mr-2"
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="19"
        fill="none"
        viewBox="0 0 18 19"
      >
        <path
          fill="#DA3F3F"
          d="M17.4375 7.49219C17.8125 8.00781 18 8.59375 18 9.25s-.1875 1.2539-.5625 1.793c-.375.5156-.8555.8789-1.4414 1.0898.2578.5625.3281 1.1719.2109 1.8281-.0937.6329-.375 1.1836-.8437 1.6524-.4688.4687-1.0195.75-1.6524.8437-.6328.1172-1.2421.0469-1.8281-.2109-.1406.3984-.3516.7383-.6328 1.0195-.2812.3047-.6211.5391-1.0195.7032-.37503.1874-.78519.2812-1.2305.2812-.65625 0-1.25391-.1875-1.79297-.5625-.51562-.375-.87891-.8555-1.08984-1.4414-.58594.2578-1.19531.3281-1.82813.2109-.63281-.0937-1.18359-.375-1.65234-.8437-.46875-.4688-.76172-1.0195-.87891-1.6524-.09375-.6562-.01172-1.2656.2461-1.8281C1.41797 11.9219.9375 11.5586.5625 11.043.1875 10.5039 0 9.90625 0 9.25s.1875-1.24219.5625-1.75781c.375-.53906.85547-.91407 1.44141-1.125-.25782-.5625-.33985-1.16016-.2461-1.79297.11719-.65625.41016-1.21875.87891-1.6875.46875-.46875 1.01953-.75 1.65234-.84375.65625-.11719 1.26563-.04688 1.82813.21094.21093-.58594.57422-1.06641 1.08984-1.44141C7.74609.4375 8.34375.25 9 .25s1.2422.1875 1.7578.5625c.5391.375.9141.85547 1.125 1.44141.5625-.25782 1.1602-.32813 1.793-.21094.6562.09375 1.2187.375 1.6875.84375.4687.46875.75 1.03125.8437 1.6875.1172.63281.0469 1.23047-.2109 1.79297.5859.21093 1.0664.58594 1.4414 1.125zM7.52344 6.22656C7.3125 5.99219 7.05469 5.875 6.75 5.875s-.57422.11719-.80859.35156C5.73047 6.4375 5.625 6.69531 5.625 7s.10547.57422.31641.80859c.23437.21094.5039.31641.80859.31641s.5625-.10547.77344-.31641C7.75781 7.57422 7.875 7.30469 7.875 7s-.11719-.5625-.35156-.77344zm-.35156 6.04684l4.85152-4.85152c.2578-.25782.2578-.51563 0-.77344l-.4218-.42188c-.2578-.25781-.5157-.25781-.7735 0L5.97656 11.0781c-.25781.2578-.25781.5157 0 .7735l.42188.4218c.25781.2578.51562.2578.77344 0zm3.26952.0352c.2344.2109.5039.3164.8086.3164.3047 0 .5625-.1055.7734-.3164.2344-.2344.3516-.5039.3516-.8086 0-.3047-.1172-.5625-.3516-.7734-.2109-.2344-.4687-.3516-.7734-.3516-.3047 0-.5742.1172-.8086.3516-.2109.2109-.3164.4687-.3164.7734 0 .3047.1055.5742.3164.8086z"
        ></path></svg
      ><span>You will get <strong>7% OFF</strong> on each product</span>
    </div>
    <div class="p-5 border border-black rounded-lg mt-6">
      <ul class="divide-y divide-gray-200 dark:divide-gray-200">
        <li class="pb-3 sm:pb-4">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <LazyNuxtImage
                class="w-[90px] h-[90px]"
                src="https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Tan-1_WebP.webp?v=1669070150"
                sizes="sm:100vw md:50vw lg:50vw"
                quality="80"
                fit="cover"
                loading="lazy"
              />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate">
                {{ selectedProduct.title }}
              </p>
              <p class="text-sm font-medium text-gray-900 truncate">
                ${{ selectedVariant.price }}
              </p>
              <p class="text-sm text-gray-500 truncate dark:text-gray-400">Tan</p>
            </div>
            <div class="inline-flex items-center">
              <button
                type="button"
                class="inline-block px-3 py-2.5 bg-gray-300 text-sm font-semibold leading-tight uppercase rounded focus:outline-none focus:ring-0 transition duration-150 ease-in-out pointer-events-none opacity-60"
                disabled
              >
                THIS ITEM
              </button>
            </div>
          </div>
        </li>
        <li class="py-3 sm:pb-4" v-for="(item, i) in otherItems" :key="i">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <img class="w-[90px] h-[90px]" :src="item.image" alt="Neil image" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate">
                {{ item.title }}
              </p>
              <p class="text-sm font-medium text-gray-900 truncate">${{ item.price }}</p>
            </div>
            <div class="inline-flex items-center">
              <button
                type="button"
                class="inline-block px-3 py-2.5 bg-[#d9dd08] text-sm font-semibold leading-tight uppercase rounded focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                @click="hasSelected(item) ? removeItem(item) : addItem(item)"
              >
                {{ hasSelected(item) ? "Selected" : "Select" }}
              </button>
            </div>
          </div>
        </li>
        <div class="pt-7">
          <div>
            <span> Total Price: </span>
            <span class="line-through text-lg text-gray-400">${{ totalPrice }}</span>
            <span class="ml-4 text-2xl text-red-600 font-bold"
              >${{ discountedTotal }}</span
            >
          </div>
          <span>Saved:</span> <strong>${{ savedTotal }}</strong>
          <button
            type="button"
            class="px-3 py-2.5 h-12 mt-5 w-full text-sm font-semibold leading-tight uppercase rounded focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            :class="[addedOtherItems.length <= 0 ? 'bg-gray-300' : 'bg-[#d9dd08]']"
            :disabled="addedOtherItems.length <= 0"
          >
            ADD SELECTED ITEM
          </button>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters: mapProductGetters } = createNamespacedHelpers("product");

export default {
  name: "BundleAndSave",
  data: () => ({
    otherItems: [
      {
        id: 1,
        title: "RUX Bag",
        price: "80.00",
        image:
          "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-Website-Mega-Menu-Bag.jpg?v=1671661812",
      },
      {
        id: 2,
        title: "RUX Pocket",
        price: "40.00",
        image:
          "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-Pocket-Top_WebP.webp?v=1669667635",
      },
    ],
    addedOtherItems: [
      {
        id: 1,
        title: "RUX Bag",
        price: "80.00",
        image:
          "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-Website-Mega-Menu-Bag.jpg?v=1671661812",
      },
      {
        id: 2,
        title: "RUX Pocket",
        price: "40.00",
        image:
          "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-Pocket-Top_WebP.webp?v=1669667635",
      },
    ],
    discount: 0.07,
  }),

  methods: {
    addItem(item) {
      this.addedOtherItems.push(item);
    },
    removeItem(item) {
      let newAddedOtherItems = [];
      newAddedOtherItems = this.addedOtherItems.filter(
        (otherItem) => item.id !== otherItem.id
      );
      this.addedOtherItems = newAddedOtherItems;
    },
    hasSelected(item) {
      return this.addedOtherItems.find((otherItem, i) => item.id === otherItem.id);
    },
    floatNumber(string) {
      return parseFloat(string).toFixed(2);
    },
  },

  computed: {
    ...mapProductGetters(["selectedProduct", "selectedVariant"]),
    totalPrice() {
      if (this.addedOtherItems.length > 0) {
        let addedItemTotal = 0;

        this.addedOtherItems.map(
          ({ price }) => (addedItemTotal += +parseFloat(price).toFixed(2))
        );

        const floatVariantPrice = +parseFloat(this.selectedVariant.price).toFixed(2);

        return addedItemTotal + floatVariantPrice;
      } else {
        return parseFloat(this.selectedVariant.price).toFixed(2);
      }
    },
    discountedTotal() {
      return (this.totalPrice - this.savedTotal).toFixed(2);
    },
    savedTotal() {
      return (this.totalPrice * this.discount).toFixed(2);
    },
  },
};
</script>
