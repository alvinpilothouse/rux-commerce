<template>
  <div>
    <star-rating
      v-model="currentValue"
      :increment="increment"
      :star-size="starSize"
      :rating="rating"
      :max-rating="maxRating"
      :show-rating="showRating"
      :active-color="activeColor"
      :read-only="readOnly"
      :round-start-rating="roundStartRating"
      :clearable="clearable"
      :active-on-click="activeOnClick"
    />
  </div>
</template>

<script>
export default {
  components: {
    [process.browser && "star-rating"]: () => import("vue-star-rating"),
  },

  props: {
    value: {
      type: Number,
    },
    increment: {
      type: Number,
      default: 1,
    },
    starSize: {
      type: Number,
      default: 50,
    },
    showRating: {
      type: Boolean,
      default: true,
    },
    activeColor: {
      type: String,
      default: "#000000",
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
    rating: {
      type: Number,
      default: 0,
    },
    maxRating: {
      type: Number,
      default: 5,
    },
    roundStartRating: {
      type: Boolean,
      default: true,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    activeOnClick: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    currentValue: {
      get: function () {
        return this.value;
      },
      set: function (v) {
        var ret = v;
        this.$emit("input", ret);
      },
    },
  },

  watch: {
    currentValue(v) {
      this.$emit("change", v);
    },
  },
};
</script>
