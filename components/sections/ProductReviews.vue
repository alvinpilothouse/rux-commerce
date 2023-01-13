<template>
  <div class="grid grid-cols-12 footer-bg-color reviews-container">
    <div class="col-span-2"></div>
    <div class="col-span-8">
      <div>
        <span class="uppercase text-gray-500 text-sm font-light">REVIEWS</span>
        <h1 class="text-5xl font-heading">What Our Customers Say</h1>
      </div>
      <div class="flex border justify-between mt-10">
        <div class="flex justify-start">
          <span class="text-6xl jbw-serif-font mr-4" style="color: #827c6e"
            >4.9</span
          >
          <Ratings
            :ratingStyle="{
              color: '#827c6e',
            }"
            className="text-left mt-5 w-5 ml-1"
          />
        </div>
        <div class="flex justify-end">
          <ButtonsCustomButton
            text="Write A Review"
            :buttonStyle="{
              backgroundColor: '#827c6e',
              width: '280px',
              height: '55px',
            }"
            className="text-white text-sm hover:bg-cyan-600"
          />
        </div>
      </div>
      <div>
        <Textfield
          label="Search Reviews"
          :inputStyle="{
            height: '50px',
          }"
          className="mt-10"
        >
          <template v-slot:icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4 text-gray-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              /></svg
          ></template>
        </Textfield>
        <div class="flex justify-between">
          <div class="grid grid-cols-6 gap-2">
            <span
              v-for="(tag, i) in selectedProduct.tags
                .split(',')
                .filter((name) => name.includes(':'))"
              :key="i"
              class="px-4 text-gray-600 py-2 rounded-full footer-bg-color-darker text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease"
            >
              {{ tag }}
            </span>
          </div>
          <div></div>
        </div>
      </div>
    </div>
    <div class="col-span-2"></div>
  </div>
</template>

<script>
export default {
  props: {
    selectedProduct: {
      type: Object,
    },
  },
};
</script>

<style>
.reviews-container {
  padding: 4em;
}
</style>
