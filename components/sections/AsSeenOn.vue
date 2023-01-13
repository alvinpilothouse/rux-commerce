<template>
  <div class="py-[40px]">
    <div class="flex flex-row justify-center w-full">
      <span class="text-xl font-medium">As Seen On</span>
    </div>
    <div class="container mx-auto md:px-[9.4em] py-4 grid sm:grid-cols-1 md:grid-cols-4">
      <div class="flex flex-row justify-center">
        <LazyNuxtImage
          src="https://v.fastcdn.co/u/07223e10/62760183-0-forbes.png"
          quality="80"
          fit="cover"
          loading="lazy"
          width="200"
        />
      </div>
      <div class="flex flex-row justify-center">
        <LazyNuxtImage
          src="https://v.fastcdn.co/u/07223e10/62760187-0-gp.png"
          quality="80"
          fit="cover"
          loading="lazy"
          width="240"
        />
      </div>
      <div class="flex flex-row justify-center">
        <LazyNuxtImage
          src="https://v.fastcdn.co/u/07223e10/62760182-0-fb.png"
          quality="80"
          fit="cover"
          loading="lazy"
          width="220"
        />
      </div>
      <div class="flex flex-row justify-center">
        <LazyNuxtImage
          src="https://v.fastcdn.co/u/07223e10/62760191-0-outside.png"
          quality="80"
          fit="cover"
          loading="lazy"
          width="240"
        />
      </div>
    </div>
  </div>
</template>
