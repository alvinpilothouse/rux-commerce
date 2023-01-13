<template>
  <div class="sticky top-0 container-bg z-50">
    <nav
      class="
        relative
        w-full
        flex flex-wrap
        items-center
        justify-between
        px-[7rem]
        py-4
        hover:text-gray-700
        focus:text-gray-700
        navbar navbar-expand-lg navbar-light
      "
    >
      <div
        class="
          container-fluid
          w-full
          flex flex-wrap
          items-center
          justify-between
          px-6
        "
      >
        <button
          class="
            navbar-toggler
            text-gray-500
            border-0
            hover:shadow-none hover:no-underline
            py-2
            px-2.5
            bg-transparent
            focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
          "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bars"
            class="w-6"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            ></path>
          </svg>
        </button>
        <div
          class="collapse navbar-collapse flex-grow items-center"
          id="navbarSupportedContent"
        >
          <!-- Left links -->
          <ul
            class="
              navbar-nav
              flex flex-col
              pl-0
              list-style-none
              mr-auto
              text-base
            "
          >
            <li class="nav-item dropdown static">
              <a
                class="
                  nav-link
                  block
                  pr-2
                  lg:px-2
                  py-2
                  text-gray-600
                  hover:text-gray-700
                  focus:text-gray-700
                  transition
                  duration-150
                  ease-in-out
                  dropdown-toggle
                  flex
                  items-center
                  whitespace-nowrap
                "
                href="#"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                type="button"
                id="dropdownMenuButtonX"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >SHOP RUX
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-3 h-3 ml-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </a>
              <div
                class="
                  dropdown-menu
                  w-full
                  mt-0
                  hidden
                  shadow-lg
                  absolute
                  left-0
                  top-full
                  bg-[#f5f5ed]
                "
                aria-labelledby="dropdownMenuButtonX"
              >
                <div class="px-6 lg:px-8 py-5">
                  <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="bg-white text-gray-600">
                      <a
                        href="#!"
                        aria-current="true"
                        class="
                          block
                          px-6
                          py-2
                          border-b border-gray-200
                          w-full
                          hover:bg-gray-50 hover:text-gray-700
                          transition
                          duration-150
                          ease-in-out
                        "
                        >Lorem ipsum</a
                      >
                      <a
                        href="#!"
                        aria-current="true"
                        class="
                          block
                          px-6
                          py-2
                          border-b border-gray-200
                          w-full
                          hover:bg-gray-50 hover:text-gray-700
                          transition
                          duration-150
                          ease-in-out
                        "
                        >Dolor sit</a
                      >
                      <a
                        href="#!"
                        aria-current="true"
                        class="
                          block
                          px-6
                          py-2
                          border-b border-gray-200
                          w-full
                          hover:bg-gray-50 hover:text-gray-700
                          transition
                          duration-150
                          ease-in-out
                        "
                        >Amet consectetur</a
                      >
                      <a
                        href="#!"
                        aria-current="true"
                        class="
                          block
                          px-6
                          py-2
                          border-b border-gray-200
                          w-full
                          hover:bg-gray-50 hover:text-gray-700
                          transition
                          duration-150
                          ease-in-out
                        "
                        >Cras justo odio</a
                      >
                      <a
                        href="#!"
                        aria-current="true"
                        class="
                          block
                          px-6
                          py-2
                          w-full
                          hover:bg-gray-50 hover:text-gray-700
                          transition
                          duration-150
                          ease-in-out
                        "
                        >Adipisicing elit</a
                      >
                    </div>
                    <div class="bg-white text-gray-600">
                      <a
                        href="#!"
                        aria-current="true"
                        class="
                          block
                          px-6
                          py-2
                          border-b border-gray-200
                          w-full
                          hover:bg-gray-50 hover:text-gray-700
                          transition
                          duration-150
                          ease-in-out
                        "
                        >Explit voluptas</a
                      >
                      <a
                        href="#!"
                        aria-current="true"
                        class="
                          block
                          px-6
                          py-2
                          border-b border-gray-200
                          w-full
                          hover:bg-gray-50 hover:text-gray-700
                          transition
                          duration-150
                          ease-in-out
                        "
                        >Perspiciatis quo</a
                      >
                      <a
                        href="#!"
                        aria-current="true"
                        class="
                          block
                          px-6
                          py-2
                          border-b border-gray-200
                          w-full
                          hover:bg-gray-50 hover:text-gray-700
                          transition
                          duration-150
                          ease-in-out
                        "
                        >Cras justo odio</a
                      >
                      <a
                        href="#!"
                        aria-current="true"
                        class="
                          block
                          px-6
                          py-2
                          border-b border-gray-200
                          w-full
                          hover:bg-gray-50 hover:text-gray-700
                          transition
                          duration-150
                          ease-in-out
                        "
                        >Laudant maiores</a
                      >
                      <a
                        href="#!"
                        aria-current="true"
                        class="
                          block
                          px-6
                          py-2
                          w-full
                          hover:bg-gray-50 hover:text-gray-700
                          transition
                          duration-150
                          ease-in-out
                        "
                        >Provident dolor</a
                      >
                    </div>
                    <div class="bg-white text-gray-600">
                      <a
                        href="#!"
                        aria-current="true"
                        class="
                          block
                          px-6
                          py-2
                          border-b border-gray-200
                          w-full
                          hover:bg-gray-50 hover:text-gray-700
                          transition
                          duration-150
                          ease-in-out
                        "
                        >Iste quaerato</a
                      >
                      <a
                        href="#!"
                        aria-current="true"
                        class="
                          block
                          px-6
                          py-2
                          border-b border-gray-200
                          w-full
                          hover:bg-gray-50 hover:text-gray-700
                          transition
                          duration-150
                          ease-in-out
                        "
                        >Cras justo odio</a
                      >
                      <a
                        href="#!"
                        aria-current="true"
                        class="
                          block
                          px-6
                          py-2
                          border-b border-gray-200
                          w-full
                          hover:bg-gray-50 hover:text-gray-700
                          transition
                          duration-150
                          ease-in-out
                        "
                        >Est iure</a
                      >
                      <a
                        href="#!"
                        aria-current="true"
                        class="
                          block
                          px-6
                          py-2
                          border-b border-gray-200
                          w-full
                          hover:bg-gray-50 hover:text-gray-700
                          transition
                          duration-150
                          ease-in-out
                        "
                        >Praesentium</a
                      >
                      <a
                        href="#!"
                        aria-current="true"
                        class="
                          block
                          px-6
                          py-2
                          w-full
                          hover:bg-gray-50 hover:text-gray-700
                          transition
                          duration-150
                          ease-in-out
                        "
                        >Laboriosam</a
                      >
                    </div>
                    <div class="bg-white text-gray-600">
                      <a
                        href="#!"
                        aria-current="true"
                        class="
                          block
                          px-6
                          py-2
                          border-b border-gray-200
                          w-full
                          hover:bg-gray-50 hover:text-gray-700
                          transition
                          duration-150
                          ease-in-out
                        "
                        >Cras justo odio</a
                      >
                      <a
                        href="#!"
                        aria-current="true"
                        class="
                          block
                          px-6
                          py-2
                          border-b border-gray-200
                          w-full
                          hover:bg-gray-50 hover:text-gray-700
                          transition
                          duration-150
                          ease-in-out
                        "
                        >Saepe</a
                      >
                      <a
                        href="#!"
                        aria-current="true"
                        class="
                          block
                          px-6
                          py-2
                          border-b border-gray-200
                          w-full
                          hover:bg-gray-50 hover:text-gray-700
                          transition
                          duration-150
                          ease-in-out
                        "
                        >Vel alias</a
                      >
                      <a
                        href="#!"
                        aria-current="true"
                        class="
                          block
                          px-6
                          py-2
                          border-b border-gray-200
                          w-full
                          hover:bg-gray-50 hover:text-gray-700
                          transition
                          duration-150
                          ease-in-out
                        "
                        >Sunt doloribus</a
                      >
                      <a
                        href="#!"
                        aria-current="true"
                        class="
                          block
                          px-6
                          py-2
                          w-full
                          hover:bg-gray-50 hover:text-gray-700
                          transition
                          duration-150
                          ease-in-out
                        "
                        >Cum dolores</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item p-2">
              <a
                class="
                  nav-link
                  text-gray-700
                  hover:text-gray-700
                  focus:text-gray-700
                  p-0
                "
                href="#"
                >MORE PRODUCTS</a
              >
            </li>
          </ul>
          <!-- Left links -->
        </div>
        <!-- Collapsible wrapper -->

        <!-- Center Element -->
        <!-- <div>
          <a
            class="flex items-center text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt-0 mr-1"
            href="#"
          >
            <img
              src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
              style="height: 15px"
              alt=""
              loading="lazy"
            />
          </a>
        </div> -->
        <!-- Center Element -->

        <!-- Right elements -->
        <div class="flex items-center relative">
          <!-- Icon -->
          <a
            class="
              nav-link
              text-gray-700
              hover:text-gray-700
              focus:text-gray-700
              p-0
              mr-6
              mt-1
            "
            href="#"
            >ABOUT</a
          >
          <button
            type="button"
            class="
              inline-block
              px-6
              py-2
              mr-6
              border-[1.5px] border-black
              font-semibold
              text-sm
              leading-tight
              uppercase
              hover:bg-[#d9dd08]
              focus:outline-none focus:ring-0
              transition
              duration-150
              ease-in-out
            "
          >
            SHOP RUX
          </button>
          <a
            class="
              nav-link
              text-gray-700
              hover:text-gray-700
              focus:text-gray-700
              p-0
              mr-6
              mt-1
            "
            href="#"
            >USD</a
          >
          <div class="dropdown relative">
            <a
              class="
                text-gray-500
                hover:text-gray-700
                focus:text-gray-700
                mr-4
                dropdown-toggle
                hidden-arrow
                flex
                items-center
              "
              href="#"
              id="dropdownMenuButton1"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>

              <span
                class="
                  text-white
                  bg-black
                  absolute
                  rounded-full
                  h-5
                  w-5
                  text-xs
                  -mt-4
                  ml-6
                  py-0
                  px-1.5
                  text-center
                  pt-[2px]
                "
                >1</span
              >
            </a>
          </div>
        </div>
        <!-- Right elements -->
      </div>
    </nav>
  </div>
</template>
