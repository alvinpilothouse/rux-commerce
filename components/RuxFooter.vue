<template>
  <footer class="text-center lg:text-left bg-black text-white">
    <div class="footer-container">
      <div class="grid grid-cols-12">
        <div class="col-span-3"></div>
        <div class="col-span-6 flex justify-between">
          <RuxLogo color="white" className="w-50 h-auto" />
          <div class="flex flex-col">
            <a href="" class="text-white underline">Contact</a>
            <a href="" class="text-white underline">Terms</a>
            <a href="" class="text-white underline">Privacy</a>
          </div>
        </div>
        <div class="col-span-3"></div>
      </div>
      <div class="mt-[5rem]">
        <p class="text-center mt-10">© 2022, RUX. All Rights Reserved.</p>
      </div>
    </div>
    <div class="h-[103px] w-full"></div>
  </footer>
</template>

<style>
.footer {
  height: auto;
}

.footer-container {
  padding: 2rem;
}
</style>
