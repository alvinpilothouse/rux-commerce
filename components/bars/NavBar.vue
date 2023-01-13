<template>
  <div class="sticky top-0 z-40">
    <nav
      class="p-3 ease-in duration-100"
      :class="[
        {
          'bg-white': withBackground,
          'border-b-[1px]': elevate,
        },
      ]"
    >
      <div class="screen-w flex flex-wrap items-center justify-between mx-auto">
        <a href="#" class="flex items-center">
          <button
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm rounded-lg hover:bg-black/[.07] focus:outline-none focus:ring-gray-200"
            :class="[{ 'text-white': !withBackground }]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-7 h-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>

            <span class="sr-only">Icon description</span>
          </button>
          <JbwLogo :color="withBackground ? 'black' : 'white'" />
        </a>
        <div class="flex">
          <button
            data-collapse-toggle="navbar-hamburger"
            type="button"
            class="inline-flex items-center p-2 mr-6 text-sm rounded-lg hover:bg-black/[.07] focus:outline-none focus:ring-gray-200"
            :class="[{ 'text-white': !withBackground }]"
            aria-controls="navbar-hamburger"
            aria-expanded="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-7 h-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
          <button
            type="button"
            class="h-7 w-7 p-0 border items-center mr-3 text-sm rounded-full hover:bg-black/[.07] focus:outline-none focus:ring-gray-200"
            :class="[
              {
                'text-white': !withBackground,
                'border-white': !withBackground,
                'border-black': withBackground,
              },
            ]"
            style="margin-top: 8px"
            v-text="cartCount"
            aria-expanded="false"
          ></button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data: () => ({
    visibleNavbar: false,
    elevate: false,
    lastScrollPosition: 0,
    cartCount: 1,
    background: ["", "white"],
  }),
  methods: {
    onScroll() {
      let currentPosition = window.pageYOffset;
      this.visibleNavbar = currentPosition > 36;
      this.elevate = currentPosition > 36;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  computed: {
    withBackground() {
      return (
        this.visibleNavbar ||
        this.$route.name === "collections-view_all-products-product_handle" // visible nav background when in PDP
      );
    },
  },
  destroyed() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>
