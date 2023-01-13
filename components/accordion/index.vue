<template>
  <div class="accordion" id="accordionExample">
    <div class="accordion-item bg-white border border-gray-200">
      <h2 class="accordion-header mb-0" id="headingOne">
        <button
          class="accordion-button relative p-0 m-0 flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Warranty
        </button>
      </h2>
      <div
        id="collapseOne"
        class="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body py-4 px-5">
          Every JBW watch comes with an international 2-year warranty, with the
          option to upgrade to a Platinum Warranty.
        </div>
      </div>
    </div>
    <div class="accordion-item bg-white border border-gray-200">
      <h2 class="accordion-header mb-0" id="headingTwo">
        <button
          class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Shipping & Returns
        </button>
      </h2>
      <div
        id="collapseTwo"
        class="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body py-4 px-5">
          Place your order with 2-day shipping by 12pm CT on Dec 20th to receive
          by Christmas Eve For a limited time only, free 2-day shipping for
          domestic orders and free shipping for international. Orders take 1-2
          business days to process. Easy returns for USA and international
          orders. We accept unworn, like-new merchandise within 15 days of the
          original purchase date.
        </div>
      </div>
    </div>
  </div>
</template>
