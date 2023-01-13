<template>
  <div>
    <div class="container mx-auto px-[8rem] grid sm:grid-cols-1 md:grid-cols-12 gap-4">
      <div class="col-span-6 p-[2rem]">
        <div
          class="bg-white"
          style="height: 440px; width: 477px; border-radius: 10px; overflow: visible"
        >
          <LazyNuxtImage
            src="https://v.fastcdn.co/u/07223e10/62777422-0-sf.png"
            sizes="sm:100vw md:50vw lg:50vw"
            quality="80"
            fit="cover"
            loading="lazy"
            width="1700"
            style="
              overflow-x: clip;
              overflow-y: clip;
              overflow-clip-margin: content-box;
              box-sizing: content-box;
            "
          />
        </div>
      </div>
      <div class="col-span-6">
        <h1 class="font-heading text-6xl font-semibold">RUX 70L</h1>
        <div class="flex flex-row mt-2">
          <Ratings
            :ratingStyle="{
              color: '#d9dd08',
            }"
            className="text-left mt-1 w-4"
          />
          <p class="text-sm text-gray-700 ml-4 mt-[2px]">100+ Reviews</p>
        </div>
        <div class="pr-[15rem] mt-7">
          <p class="text-gray-700">
            RUX is the new all-in-one system to pack, move, and use your valuable gear.
            Garage to the beach. Truck to the trailhead. Ready when you need it.
          </p>
        </div>
        <div class="pl-8 pt-5 text-gray-700">
          <ul class="list-disc">
            <li>Fully collapsible design</li>
            <li>Multiple carry configurations</li>
            <li>Waterproof materials</li>
            <li>Easy access tri-fold lid</li>
            <li>Lifetime Warranty!</li>
          </ul>
        </div>
        <div class="pr-[15rem] mt-7">
          <p class="text-gray-700">Choice of colors</p>
        </div>
      </div>
    </div>
    <div class="px-20">
      <div class="flex justify-center mx-auto w-full">
        <div class="flex mr-[60px] flex-row">
          <LazyNuxtImage
            src="https://v.fastcdn.co/u/07223e10/62790707-0-RUX-Website-PDP-Icon.3updatedAt1666130234745"
            sizes="sm:100vw md:50vw lg:50vw"
            quality="80"
            fit="cover"
            loading="lazy"
            width="55"
          />
          <span class="text-xl text-gray-700 mt-4 ml-8">Lifetime&nbsp;Warranty</span>
        </div>
        <div class="flex ml-[60px] flex-row">
          <LazyNuxtImage
            src="https://v.fastcdn.co/u/07223e10/62790709-0-RUX-Website-PDP-Icon.3updatedAt1666130234704"
            sizes="sm:100vw md:50vw lg:50vw"
            quality="80"
            fit="cover"
            loading="lazy"
            width="55"
          />
          <span class="text-xl text-gray-700 mt-4 ml-8">30&nbsp;Day&nbsp;Return</span>
        </div>
      </div>
    </div>
  </div>
</template>
