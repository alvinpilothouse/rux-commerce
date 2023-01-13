<template>
  <div class="accordion" id="accordionExample">
    <div class="accordion-item border-b-2 border-[#d9dd08] rounded-none">
      <h2 class="accordion-header mb-0" id="headingOne">
        <button
          class="accordion-button collapsed relative flex items-center w-full py-4 px-1 text-base text-gray-800 text-left border-0 rounded-none transition focus:outline-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Specs
        </button>
      </h2>
      <div
        id="collapseOne"
        class="accordion-collapse collapse"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body py-4 px-1">
          <strong>This is the first item's accordion body.</strong> It is shown
          by default, until the collapse plugin adds the appropriate classes
          that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You
          can modify any of this with custom CSS or overriding our default
          variables. It's also worth noting that just about any HTML can go
          within the <code>.accordion-body</code>, though the transition does
          limit overflow.
        </div>
      </div>
    </div>
    <div class="accordion-item border-b-2 border-[#d9dd08] rounded-none">
      <h2 class="accordion-header mb-0" id="headingTwo">
        <button
          class="accordion-button collapsed relative flex items-center w-full py-4 px-1 text-base text-gray-800 text-left rounded-none transition focus:outline-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Materials
        </button>
      </h2>
      <div
        id="collapseTwo"
        class="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body py-4 px-1">
          High tenacity 840D TPU coated waterproof nylon bag, PU coated
          compressed EVA foam base, nylon webbing straps & composite nylon
          frame.
        </div>
      </div>
    </div>
  </div>
</template>
