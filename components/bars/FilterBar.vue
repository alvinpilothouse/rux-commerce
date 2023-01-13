<template>
  <div class="filter-bar">
    <nav class="p-3 px-10 bg-white border-b-[1px]">
      <div
        class="screen-w px-10 flex flex-wrap items-center justify-between mx-auto"
      >
        <!-- Left links -->
        <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
          <li class="nav-item pr-2 flex">
            <div class="dropdown relative">
              <button
                class="dropdown-toggle text-sm flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-800 rounded hover:bg-red"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
              >
                Collection
                <svg
                  class="w-4 h-4 ml-1 text-gray-600"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>

              <ul
                class="dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left shadow-lg mt-1 hidden m-0 bg-clip-padding border-none"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a
                    class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    href="#"
                    >Action</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    href="#"
                    >Another action</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    href="#"
                    >Something else here</a
                  >
                </li>
              </ul>
            </div>

            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              class="text-sm flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium ml-8 text-gray-800 rounded hover:bg-red"
            >
              Color
              <svg
                class="w-4 h-4 ml-1 text-gray-600"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>

            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              class="text-sm flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium ml-8 text-gray-800 rounded hover:bg-red"
            >
              Price
              <svg
                class="w-4 h-4 ml-1 text-gray-600"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>

            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              class="text-sm flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium ml-8 text-gray-800 rounded hover:bg-red"
            >
              Diamond&nbsp;Count
              <svg
                class="w-4 h-4 ml-1 text-gray-600"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>

            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              class="text-sm flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium ml-8 text-gray-800 rounded hover:bg-red"
            >
              Movement
              <svg
                class="w-4 h-4 ml-1 text-gray-600"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
        </ul>
        <!-- Left links -->
        <div
          style="position: relative"
          class="focus:ring focus:ring-violet-300"
        >
          <!-- Right links -->
          <ul class="navbar-nav flex flex-col pl-0 list-style-none ml-auto">
            <li class="nav-item pr-2">
              <div class="dropdown relative">
                <button
                  class="dropdown-toggle text-sm flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-800"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                >
                  Sort by &nbsp;<u>{{ sortBy }}</u>
                  <svg
                    class="w-4 h-4 ml-1 text-gray-600"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>

                <ul
                  v-model="sortBy"
                  class="dropdown-menu min-w-max absolute bg-white text-base z-50 float-left list-none text-right hidden bg-clip-padding border-none"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <div class="border-l-2 border-r-2 border-b-2 border-t-2 m-0">
                    <h6
                      class="text-gray-500 font-semibold text-sm py-2 px-4 block w-full whitespace-nowrap bg-transparent"
                    >
                      Sort by
                    </h6>
                    <li
                      v-for="(sort, i) in sortByItems"
                      :key="i"
                      @click="changeSortHandler(sort)"
                    >
                      <a
                        class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                        href="#"
                        >{{ sort }}</a
                      >
                    </li>
                  </div>
                </ul>
              </div>
            </li>
          </ul>
          <!-- Right links -->
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data: () => ({
    sortByItems: [
      "Best selling",
      "Price ascending",
      "Price descending",
      "Created descending",
    ],
    sortBy: "Featured",
  }),

  methods: {
    changeSortHandler(value) {
      this.sortBy = value;
    },
  },
};
</script>
<style>
.filter-bar {
  position: sticky;
  top: 65px;
}
</style>
