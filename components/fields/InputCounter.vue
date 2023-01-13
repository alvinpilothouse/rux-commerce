<template>
 <div class="custom-number-input h-10 w-32">
  <div class="border-[1px] border-[#d9dd08] flex flex-row h-10 w-full relative bg-transparent">
    <button data-action="decrement" class="bg-white text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 cursor-pointer outline-none" @click="decrementtHandler">
      <span class="m-auto text-2xl font-thin">−</span>
    </button>
    <input type="number" v-model="value" class="focus:outline-none text-center w-full  font-semibold text-md hover:text-black focus:text-black md:text-base cursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value="1"></input>
  <button data-action="increment" class="bg-white text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 cursor-pointer" @click="incrementHandler">
    <span class="m-auto text-2xl font-thin">+</span>
  </button>
  </div>
    </div>
</template>

<script>
export default {
  data: () => ({
    value: 1,
  }),

  methods: {
    incrementHandler() {
      this.value++;
    },
    decrementtHandler() {
      if(this.value <= 1) return;
      this.value--;
    },
  },
};
</script>

<style>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.custom-number-input input:focus {
  outline: none !important;
}

.custom-number-input button:focus {
  outline: none !important;
}
</style>