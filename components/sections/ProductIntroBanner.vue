<template>
  <div
    class="container mx-auto md:pl-[14.5em] md:pr-[9.4em] py-4 grid sm:grid-cols-1 md:grid-cols-2"
  >
    <div class="flex items-center">
      <div>
        <h1 class="text-[3.3rem] leading-11 font-semibold text-left font-heading">
          MOVE YOUR GEAR.
        </h1>
        <h1 class="text-[3.3rem] leading-11 font-semibold text-left font-heading">
          HERE TO
          <span class="underline underline-offset-1 decoration-[#d9dd08] decoration"
            >ANYWHERE</span
          >.
        </h1>
        <div class="mt-12">
          <p class="text-gray-700 text-xl">
            Packs like a box. Carries like a bag. Stores like a case. Travels like a boss.
          </p>
        </div>
        <div>
          <ButtonsShopRux text="SHOP RUX 70L" class="mt-8" />
        </div>
        <div class="mt-12">
          <p class="text-gray-700 text-xl">“Solid product... built to last.”</p>
          <Ratings
            active-color="#d9dd08"
            :value="5"
            :increment="1"
            :star-size="20"
            :read-only="true"
            :show-rating="false"
          />
          <p class="text-sm text-gray-700 mt-4">Wayne N.</p>
        </div>
      </div>
    </div>
    <div class="flex justify-end">
      <div class="bg-white p-8">
        <LazyNuxtImage
          src="https://v.fastcdn.co/u/07223e10/62760933-0-RUX-70L-Carry-Mode-G.gif"
          sizes="sm:100vw md:50vw lg:50vw"
          quality="80"
          fit="cover"
          loading="lazy"
          width="490"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    //
  }),
};
</script>
