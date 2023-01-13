<template>
  <div class="grid-wrap mt-4 mb-4">
    <div id="header" class="flex justify-between items-center">
      <div class="summary flex grow">
        <div class="summary-content b">
          <span title="4.9" class="review-stars stars">
            <icon
              v-for="index in 5"
              :key="index"
              icon="star"
              iconClass="star"
            />
          </span>
        </div>
        <div tabindex="0" class="summary-content b">
          <div class="summary-text">
            <span style="margin-right: 8px">109 Reviews</span>
            <button tabindex="-1" class="header-chevron">
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="chevron-open"
              >
                <path
                  d="M7.11098 5.15691L2.16098 0.206909L0.746979 1.62091L7.11098 7.98491L13.475 1.62091L12.061 0.206911L7.11098 5.15691Z"
                  fill="black"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="loox-dropdown"></div>
      <nav role="navigation" class="menu">
        <button type="button" class="btn header-btn menu-icon">
          <svg
            data-panel="dropdown"
            id="menu-icon-svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="menu-btn-path"
              data-panel="dropdown"
              d="M4.17 16.096C4.3766 15.5104 4.75974 15.0034 5.2666 14.6447C5.77346 14.2861 6.37909 14.0935 7 14.0935C7.62091 14.0935 8.22654 14.2861 8.7334 14.6447C9.24026 15.0034 9.6234 15.5104 9.83 16.096H20V18.096H9.83C9.6234 18.6815 9.24026 19.1885 8.7334 19.5472C8.22654 19.9058 7.62091 20.0984 7 20.0984C6.37909 20.0984 5.77346 19.9058 5.2666 19.5472C4.75974 19.1885 4.3766 18.6815 4.17 18.096H0V16.096H4.17ZM10.17 9.09596C10.3766 8.51042 10.7597 8.00339 11.2666 7.64475C11.7735 7.2861 12.3791 7.09351 13 7.09351C13.6209 7.09351 14.2265 7.2861 14.7334 7.64475C15.2403 8.00339 15.6234 8.51042 15.83 9.09596H20V11.096H15.83C15.6234 11.6815 15.2403 12.1885 14.7334 12.5472C14.2265 12.9058 13.6209 13.0984 13 13.0984C12.3791 13.0984 11.7735 12.9058 11.2666 12.5472C10.7597 12.1885 10.3766 11.6815 10.17 11.096H0V9.09596H10.17ZM4.17 2.09596C4.3766 1.51042 4.75974 1.00339 5.2666 0.644746C5.77346 0.286102 6.37909 0.0935059 7 0.0935059C7.62091 0.0935059 8.22654 0.286102 8.7334 0.644746C9.24026 1.00339 9.6234 1.51042 9.83 2.09596H20V4.09596H9.83C9.6234 4.68149 9.24026 5.18852 8.7334 5.54717C8.22654 5.90581 7.62091 6.09841 7 6.09841C6.37909 6.09841 5.77346 5.90581 5.2666 5.54717C4.75974 5.18852 4.3766 4.68149 4.17 4.09596H0V2.09596H4.17ZM7 4.09596C7.26522 4.09596 7.51957 3.9906 7.70711 3.80306C7.89464 3.61553 8 3.36117 8 3.09596C8 2.83074 7.89464 2.57639 7.70711 2.38885C7.51957 2.20131 7.26522 2.09596 7 2.09596C6.73478 2.09596 6.48043 2.20131 6.29289 2.38885C6.10536 2.57639 6 2.83074 6 3.09596C6 3.36117 6.10536 3.61553 6.29289 3.80306C6.48043 3.9906 6.73478 4.09596 7 4.09596ZM13 11.096C13.2652 11.096 13.5196 10.9906 13.7071 10.8031C13.8946 10.6155 14 10.3612 14 10.096C14 9.83074 13.8946 9.57639 13.7071 9.38885C13.5196 9.20131 13.2652 9.09596 13 9.09596C12.7348 9.09596 12.4804 9.20131 12.2929 9.38885C12.1054 9.57639 12 9.83074 12 10.096C12 10.3612 12.1054 10.6155 12.2929 10.8031C12.4804 10.9906 12.7348 11.096 13 11.096ZM7 18.096C7.26522 18.096 7.51957 17.9906 7.70711 17.8031C7.89464 17.6155 8 17.3612 8 17.096C8 16.8307 7.89464 16.5764 7.70711 16.3888C7.51957 16.2013 7.26522 16.096 7 16.096C6.73478 16.096 6.48043 16.2013 6.29289 16.3888C6.10536 16.5764 6 16.8307 6 17.096C6 17.3612 6.10536 17.6155 6.29289 17.8031C6.48043 17.9906 6.73478 18.096 7 18.096Z"
              fill="black"
            ></path>
          </svg>
        </button>
      </nav>
      <button id="write" type="button" class="btn header-btn lx-btn lx-primary">
        Write a review
      </button>
    </div>
    <div id="grid">
      <div
        class="
          grid
          sm:grid-cols-3
          lg:grid-cols-4
          grid-cols-2
          gap-4
          relative
          grid-item-wrap
        "
      >
        <cards-review-card
          v-for="(review, index) in reviews"
          :key="index"
          :url="review.url"
          :name="review.name"
          :date="review.date"
          :description="review.description"
          :type="review.type"
          :verified="review.verified"
        />
      </div>
    </div>
    <div class="text-center" style="padding: 20px 0 10px">
      <button id="loadMore" class="btn lx-btn lx-primary">
        Show more reviews
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reviews: [
        {
          url: '//images.loox.io/uploads/2022/12/10/E117202PT.jpg',
          name: 'Ridley E.',
          date: '12/10/2022',
          description: 'This is our third RUX 70l now. We love how versatile they are, and how they make our adventuring easier! The refinements in the latest version make it even better than our originals. Keep on RUXing!',
          type: 'Black',
          verified: true
        },
        {
          url: '//images.loox.io/uploads/2022/11/18/Vy1eKYeUT.jpg',
          name: 'Christopher K.',
          date: '11/18/2022',
          description: 'Super useful, really rugged. Going to be the best beach box and camping tote ever.',
          type: 'Grey',
          verified: true
        },
        {
          url: '//images.loox.io/uploads/2022/11/17/EyRj84yL6.jpg',
          name: 'Eric M.',
          date: '12/10/2022',
          description: 'Brilliant design, great construction, overall top-notch products.'
        },
        {
          url: '//images.loox.io/uploads/2022/10/11/4yenhzspGT.jpg',
          name: 'Jade C.',
          date: '10/11/2022',
          description: 'It’s amazing! My car is always such a mess, especially when we go camping on weekends. At least now I can keep my stuff organized, and at the same spot. BONUS: It collapses and fits under my bed when I’m not using it!'
        }
      ]
    }
  }
}
</script>

    ReviewCard
<style>
@import url("https://fonts.googleapis.com/css?family=Barlow");

#header {
  justify-content: stretch;
  position: relative;
  margin: 20px auto 7px;
}

#loadMore {
  font-size: 12px;
}

#write {
  order: 2;
}

.summary {
  order: 1;
}

.grid-wrap {
  font-family: "Barlow", "sans-serif";
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
  max-width: calc(var(--container-width, 1072) * 1px);
  width: 100%;
}

.header-btn {
  font-size: 16px;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  height: 40px !important;
  cursor: pointer;
  color: #000000;
}

.btn {
  padding: 6px 12px;
  cursor: pointer;
}

.menu {
  order: 3;
  margin-left: 7px;
}

.menu-icon {
  background: none;
  padding: 2px 6px 2px 8px;
  width: 37px;
}

.lx-btn {
  border: 1px solid #e8e8e8;
}

.lx-primary {
  border-radius: 2px;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
}

.star {
  color: #d9de08;
  font-size: 22px;
  margin-left: -2px;
}

.review-stars {
  margin-right: 10px;
  display: inline-block;
}

@media only screen and (max-width: 600px) {
  .grid-wrap {
    min-height: 315px;
  }

  #header {
    flex-wrap: wrap;
  }

  .summary {
    order: 1;
  }

  .menu {
    order: 2;
  }

  #write {
    flex-grow: 1;
    order: 3;
    width: 100%;
    font-size: 16px;
    margin-top: 8px;
  }
}

@media only screen and (max-width: 480px) {
  #header #write {
    font-size: 16px;
    padding: 4px 10px;
  }
}
</style>
