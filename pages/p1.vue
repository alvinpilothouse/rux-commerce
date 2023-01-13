<template>
  <div>
    <BarsAnnouncementBar :height="55">
      <template #content>
        <p class="text-base font-semibold text-announcement text-center uppercase">
          GET READY FOR SNOW SEASON // NEXT DAY SHIPPING // 30 DAY RETURN
        </p>
      </template>
    </BarsAnnouncementBar>
    <div class="container-bg">
      <lazy-bars-page-header-bar></lazy-bars-page-header-bar>
      <lazy-sections-product-intro-banner></lazy-sections-product-intro-banner>
      <lazy-sections-feature></lazy-sections-feature>
      <lazy-sections-as-seen-on></lazy-sections-as-seen-on>
      <lazy-sections-built-for-outdoors></lazy-sections-built-for-outdoors>
      <lazy-sections-reviews></lazy-sections-reviews>
      <lazy-sections-features></lazy-sections-features>
      <lazy-sections-specs-and-material></lazy-sections-specs-and-material>
      <lazy-sections-feature-banner></lazy-sections-feature-banner>
      <lazy-sections-youtube-videos></lazy-sections-youtube-videos>
      <lazy-sections-product-quote></lazy-sections-product-quote>
      <div
        class="bg-[url('https://v.fastcdn.co/u/07223e10/62790775-0-carry-3.jpg')] bg-fixed bg-cover bg-no-repeat bg-center"
        style="width: 100%; height: 90vh"
      ></div>
      <div class="pt-[8rem] pb-[4rem] md:px-[25rem]">
        <LazyDivider />
      </div>
      <lazy-sections-product-short-details></lazy-sections-product-short-details>
      <div class="py-[3rem] md:px-[25rem]">
        <LazyDivider />
      </div>
      <div class="py-[3rem] md:px-[25rem]">
        <lazy-sections-faq></lazy-sections-faq>
      </div>
    </div>
    <div
      class="fixed bg-[#f5f5ed] border-t-[1.5px] border-gray-300 bottom-0 left-0 right-0 bt-2 h-[103px] w-full md:px-[25em]"
    >
      <div class="grid sm:grid-cols-2 md:grid-cols-3">
        <div class="ml-[5.8em] grid h-[103px] content-center">
          <div>
            <LazyNuxtImage
              src="https://v.fastcdn.co/u/07223e10/62777422-0-sf.png"
              style="position: absolute; top: -18px"
              sizes="sm:100vw md:50vw lg:50vw"
              quality="80"
              fit="cover"
              loading="lazy"
              width="147"
            />
          </div>
          <h1 class="ml-[160px] text-2xl font-semibold font-heading">RUX 70L</h1>
        </div>
        <div class="grid h-[103px] content-center">
          <span class="text-right font-semibold text-gray-800"
            >LIFETIME WARRANTY // NEXT DAY SHIPPING</span
          >
        </div>
        <div class="grid h-[91px] content-center justify-center mr-[1.9em]">
          <ButtonsShopRux text="SHOP RUX 70L" class="h-12" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "RUX 70L",
    };
  },
};
</script>
