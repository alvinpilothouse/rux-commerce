<template>
  <div class="grid-item">
    <div class="item-img">
      <img :src="url" />
    </div>
    <div class="main">
      <div class="box">
        <div class="block title">
          {{ name }}
          <icon v-if="verified" icon="circle-check" class="verified" />
        </div>
        <div class="clearfix"></div>
        <div class="block time">{{ date }}</div>
        <div aria-label="5 / 5 star review" class="block stars">
          <icon v-for="index in 5" :key="index" icon="star" iconClass="star" />
        </div>
        <div class="block">
          <div class="main-text action">
            {{ description }}
          </div>
        </div>
        <div v-if="type" class="block">
          <div class="metadata">
            <div class="small text-muted">Item type:</div>
            <div class="value">{{ type }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    verified: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
.grid-item {
  background-color: #f0f0f0;
  overflow: hidden;
  height: fit-content;
}

#grid .grid-item {
  box-shadow: 0 0 3px rgb(0 0 0 / 20%);
  background: #fff;
}

#grid .grid-item .box {
  padding-top: 10px;
  padding-bottom: 10px;
}

.grid-item .block.title {
  padding: 0 10px 0;
  font-weight: bold;
  font-size: 16px;
}

.grid-item .block.time {
  color: #767676;
  font-size: 11px;
  padding: 5px 10px 0;
  height: 20px;
}

.grid-item .block {
  padding: 10px 10px 0;
}

.action {
  cursor: pointer;
}

.main-text {
  font-size: 14px;
  line-height: 19px;
}

.metadata {
  margin-bottom: 5px;
}

.metadata .small {
  font-size: 11px;
  color: #a3a3a3;
}

.metadata .value {
  font-size: 13px;
}

.grid-item .item-img img {
  opacity: 1;
  background: rgb(217, 190, 135);
  width: 100%;
}

.grid-item .stars {
  height: 27px;
  margin: 5px 10px 0;
  padding: 0px;
}

#grid .grid-item .star {
  font-size: 14px;
}

.stars {
  cursor: pointer;
}

.verified {
  margin: 0px 4px;
}
</style>
