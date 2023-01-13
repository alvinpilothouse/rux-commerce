<template>
  <div>
    <LazyBarsAnnouncementBar :height="40">
      <template #content>
        <NuxtLink to="/p1">
          <p
            class="
              text-base
              font-semibold
              text-announcement text-center
              uppercase
            "
          >
            Free Shipping on Essentials Sets | Shop Now >>
          </p>
        </NuxtLink>
      </template>
    </LazyBarsAnnouncementBar>

    <LazyBarsPdpNavbar />

    <section class="text-gray-700 body-font overflow-hidden container-bg">
      <div class="container mx-auto">
        <div class="mx-auto pt-1 pb-9 flex flex-wrap">
          <div class="lg:w-1/2 w-full object-cover object-center">
            <!-- <lazy-sections-pdp-product-gallery
              :selectedProduct="selectedProduct"
            ></lazy-sections-pdp-product-gallery> -->
          </div>
          <div class="lg:w-1/2 w-full lg:pl-7 lg:py-2 mt-6 lg:mt-0">
            <lazy-sections-pdp-product-detail-action
              :selectedProduct="selectedProduct"
              :selectedVariant="selectedVariant"
            ></lazy-sections-pdp-product-detail-action>
            <div class="border-y-2 border-[#d9dd08] mt-9">
              <div class="py-4 flex justify-between">
                <lazy-sections-pdp-benefit />
              </div>
            </div>
            <LazyAccordionSpecsAndMaterials />
            <div class="mt-9">
              <lazy-sections-pdp-bundle-and-save></lazy-sections-pdp-bundle-and-save>
            </div>
          </div>
        </div>
      </div>
    </section>
    <lazy-sections-product-quote></lazy-sections-product-quote>
    <div class="mt-9">
      <div style="width: 100%; height: 100vh">
        <!-- <iframe
          id="youtube-2948"
          frameborder="0"
          allowfullscreen="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          title="Player for RUX 70L - All-in-one System to Manage &amp; Move Your Gear"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/IF64kBeqgX8?autoplay=0&amp;controls=0&amp;disablekb=1&amp;playsinline=1&amp;cc_load_policy=0&amp;cc_lang_pref=auto&amp;widget_referrer=https%3A%2F%2Frux.life%2Fproducts%2Frux-70l%3Fvariant%3D41903983657198&amp;rel=0&amp;showinfo=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;customControls=true&amp;noCookie=false&amp;enablejsapi=1&amp;origin=https%3A%2F%2Frux.life&amp;widgetid=1"
          data-gtm-yt-inspected-11="true"
          data-dashlane-frameid="2606"
        ></iframe> -->
      </div>
    </div>
    <div class="mx-auto p-9 lg:w-1/2">
      <div class="px-[5rem]">
        <!-- Swiper <client-only>
          
        </client-only> -->
      </div>
    </div>
    <div>
      <!-- Swiper <client-only> </client-only> -->
      <div class="container mx-auto grid md:grid-cols-12 pt-[6rem] py-[4rem]">
        <div class="xs:cols-span-12 md:col-span-7 md:pr-[120px]">
          <div class="grid content-center h-full">
            <h1 class="text-5xl font-semibold">Tight Gear. Loose Plans.</h1>
            <span class="mt-6">
              RUX is the new all-in-one system to pack, move, and use your
              valuable gear. Garage to the beach. Truck to the trailhead. Ready
              when you need it.
              <strong>Just pack, grab ‘n go.</strong>
            </span>
          </div>
        </div>
        <div class="xs:cols-span-12 md:col-span-5">
          <img
            class="w-full h-full lazyautosizes lazyloaded"
            data-widths="[180,360,540,720,900,1080,1200]"
            data-aspectratio="1.0"
            data-sizes="auto"
            width="1200"
            height="1200"
            alt=""
            data-image=""
            sizes="617px"
            srcset="
              //cdn.shopify.com/s/files/1/0313/2532/3401/files/IMG_0461_1200x1200_2fc8925b-2134-4dea-be53-6b943a2d2800_180x.jpg?v=1651616294   180w,
              //cdn.shopify.com/s/files/1/0313/2532/3401/files/IMG_0461_1200x1200_2fc8925b-2134-4dea-be53-6b943a2d2800_360x.jpg?v=1651616294   360w,
              //cdn.shopify.com/s/files/1/0313/2532/3401/files/IMG_0461_1200x1200_2fc8925b-2134-4dea-be53-6b943a2d2800_540x.jpg?v=1651616294   540w,
              //cdn.shopify.com/s/files/1/0313/2532/3401/files/IMG_0461_1200x1200_2fc8925b-2134-4dea-be53-6b943a2d2800_720x.jpg?v=1651616294   720w,
              //cdn.shopify.com/s/files/1/0313/2532/3401/files/IMG_0461_1200x1200_2fc8925b-2134-4dea-be53-6b943a2d2800_900x.jpg?v=1651616294   900w,
              //cdn.shopify.com/s/files/1/0313/2532/3401/files/IMG_0461_1200x1200_2fc8925b-2134-4dea-be53-6b943a2d2800_1080x.jpg?v=1651616294 1080w,
              //cdn.shopify.com/s/files/1/0313/2532/3401/files/IMG_0461_1200x1200_2fc8925b-2134-4dea-be53-6b943a2d2800_1200x.jpg?v=1651616294 1200w
            "
          />
        </div>
      </div>
      <div class="container mx-auto grid md:grid-cols-12 pt-[4rem] py-[6rem]">
        <div class="xs:cols-span-12 md:col-span-5">
          <img
            class="w-full h-full lazyautosizes lazyloaded"
            data-widths="[180,360,540,720,900,1080,1080]"
            data-aspectratio="1.0"
            data-sizes="auto"
            width="1080"
            height="1080"
            alt=""
            data-image=""
            sizes="617px"
            srcset="
              //cdn.shopify.com/s/files/1/0313/2532/3401/files/Collapse_RUX_70L-web_85933aa7-6ce1-43f9-b0d4-7f095c4edd87_180x.gif?v=1651616084   180w,
              //cdn.shopify.com/s/files/1/0313/2532/3401/files/Collapse_RUX_70L-web_85933aa7-6ce1-43f9-b0d4-7f095c4edd87_360x.gif?v=1651616084   360w,
              //cdn.shopify.com/s/files/1/0313/2532/3401/files/Collapse_RUX_70L-web_85933aa7-6ce1-43f9-b0d4-7f095c4edd87_540x.gif?v=1651616084   540w,
              //cdn.shopify.com/s/files/1/0313/2532/3401/files/Collapse_RUX_70L-web_85933aa7-6ce1-43f9-b0d4-7f095c4edd87_720x.gif?v=1651616084   720w,
              //cdn.shopify.com/s/files/1/0313/2532/3401/files/Collapse_RUX_70L-web_85933aa7-6ce1-43f9-b0d4-7f095c4edd87_900x.gif?v=1651616084   900w,
              //cdn.shopify.com/s/files/1/0313/2532/3401/files/Collapse_RUX_70L-web_85933aa7-6ce1-43f9-b0d4-7f095c4edd87_1080x.gif?v=1651616084 1080w,
              //cdn.shopify.com/s/files/1/0313/2532/3401/files/Collapse_RUX_70L-web_85933aa7-6ce1-43f9-b0d4-7f095c4edd87_1080x.gif?v=1651616084 1080w
            "
          />
        </div>
        <div class="xs:cols-span-12 md:col-span-7 md:pl-[120px]">
          <div class="grid content-center h-full">
            <h1 class="text-5xl font-semibold">What the RUX?</h1>
            <span class="mt-6">
              RUX 70L is a compressible, weatherproof gear management solution
              with a wide rigid opening for easy access, a secure, stowable lid
              and modular straps for easy carry.
            </span>
            <span class="mt-7 font-bold">
              Fast, adaptable, mobile, and weatherproof. Built for life,
              outside.
            </span>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <client-only><lazy-rux-chart></lazy-rux-chart></client-only>
      </div>
      <div
        lazy-background="https://v.fastcdn.co/u/07223e10/62780689-0-why.jpg"
        class="bg-cover bg-no-repeat bg-center w-full"
        style="width: 100%; height: 90vh"
      ></div>
      <div class="container mx-auto mt-14">
        <sections-reviews></sections-reviews>
      </div>
      <!-- <div class="container mx-auto mt-14 md:px-[5rem]">
        <sections-pdp-you-may-also-like></sections-pdp-you-may-also-like>
      </div> -->
      <div class="container mx-auto mt-14 md:px-[5rem]">
        <lazy-sections-faq></lazy-sections-faq>
      </div>
    </div>
    <LazyBarsCartBottomBar />
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters: mapProductGetters } = createNamespacedHelpers("product");

export default {
  methods: {
    getImageUrl(imageId) {
      return `https://picsum.photos/600/400/?image=${imageId}`;
    },
    onSlideChange() {
      console.log("slide change");
    },
  },

  computed: {
    ...mapProductGetters(["selectedProduct", "selectedVariant"]),
  },
};
</script>

<style>
.container-space {
  margin-top: 2rem;
}
.product-thumbnails {
  display: flex;
  margin-top: 2rem;
}
.product-thumbnails > ul {
  display: flex;
  list-style: none;
  padding-left: 0;
}
.product-thumbnails > li {
  margin-right: 10px;
}
.product-thumbnails > ul > li > img {
  width: 100px;
  cursor: pointer;
}
.thumbnail-active {
  border: 2px solid #000;
}
.nav-link > img {
  width: 40px;
  border-radius: 8px;
  margin-right: 10px;
}
.btn-custom-color {
  border: 2px solid #4fc08d;
  color: #4fc08d;
}
.btn-custom-color:hover {
  border: 2px solid #4fc08d;
  background-color: #4fc08d;
  color: #ffffff;
}
</style>
