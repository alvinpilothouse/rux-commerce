<template>
  <div class="w-full h-[370px] hover:scale-175" style="overflow: auto">
    <!-- <div
      class="
        cursor-pointer
        w-full
        h-[370px]
        bg-cover bg-no-repeat bg-center
        hover:scale-175
        ease-in-out
        duration-200
        relative
        overflow-hidden
      "
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      <img :src="hover ? hoverSrc : src" />
      <div
        class="
          absolute
          left-0
          w-full
          flex
          justify-center
          px-5
          ease-in
          duration-100
        "
        :class="[hover ? 'bottom-5' : '-bottom-20']"
      >
        <button
          class="
            border-2 border-black
            bg-[#f5f5ed]
            py-2
            w-full
            h-[55px]
            font-semibold
          "
        >
          QUICK ADD
        </button>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    },
    src: {
      type: String,
      default: "",
    },
    hoverSrc: {
      type: String,
      default: "",
    },
  },

  data: () => ({
    hover: false,
  }),

  computed: {
    imgSrc() {
      return this.src;
    },
    imgHoverSrc() {
      return this.hoverSrc;
    },
  },
};
