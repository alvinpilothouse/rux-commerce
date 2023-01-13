<template>
  <div class="container mx-auto md:px-[11.5em] mb-10 -mt-8 py-0">
    <div class="bg-white grid sm:grid-cols-1 md:grid-cols-2">
      <div class="p-[4em]">
        <LazyNuxtImage
          src="https://v.fastcdn.co/u/07223e10/62831331-0-three-rux.jpg"
          sizes="sm:100vw md:50vw lg:50vw"
          quality="80"
          fit="cover"
          loading="lazy"
        />
      </div>
      <div class="grid content-center">
        <div class="pr-[5em] pl-2">
          <div>
            <h1 class="font-heading text-3xl font-semibold">SPECS</h1>
            <LazyDivider class="my-2 bg-black" />
            <p class="text-base text-gray-700 leading-[1.8rem]">Volume: 70PL</p>
            <p class="text-base text-gray-700 leading-[1.8rem]">
              ​Empty weight: 5.3 lbs / 2.4 kg
            </p>
            <p class="text-base text-gray-700 leading-[1.8rem]">
              Dimensions (W x L x H): 15.7 x 19.5 x 13.8 inches / 40 x 50 x 35 cm
            </p>
            <p class="text-base text-gray-700 leading-[1.8rem]">
              Load Limit: 50 lbs / 22.6 kg
            </p>
          </div>

          <div class="mt-8">
            <h1 class="font-heading text-3xl font-semibold">MATERIALS</h1>
            <LazyDivider class="my-2 bg-black" />
            <p class="text-base text-gray-700 leading-[1.8rem]">
              High tenacity 840D TPU coated waterproof nylon bag, PU coated compressed EVA
              foam base, nylon webbing straps & composite nylon frame.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
