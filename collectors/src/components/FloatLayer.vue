<template>
  <div class="float-layer" v-if="show">
    <div class="close-layer" @click="closeThis">
      <i class="iconfont icon-fanhuicopy"></i>
    </div>
    <div class="full-pic">
      <img :src="showpic ? url + item.id + '.jpg' : ''" />
    </div>
    <div class="detail-info">
      <p class="b-title">{{ item.name }}</p>
      <p class="tag-box" v-if="[0, 1].indexOf(urlType) != -1">
        <span class="tag-item" v-for="tag in item.tag" :key="tag">{{
          tag
        }}</span>
      </p>
      <p class="tag-box">
        <span class="tag-item">{{ item.id }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FloatLayer",
  props: {
    item: {
      type: Object,
      default: {},
    },
    show: {
      type: Boolean,
    },
    urlType: {
      type: Number,
    },
    showPic: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      showpic: this.showPic,
      thumbUrl: [
        "./static/img/item/trigger/hyperkey/",
        "/static/img/item/z/ultramedal/",
        "/static/img/item/sofubi/500/",
      ],
    };
  },
  methods: {
    closeThis() {
      this.$emit("parentEvent", false);
    },
  },
  computed: {
    url() {
      return this.thumbUrl[this.urlType];
    },
  },
};
</script>

<style scoped>
.float-layer {
  width: 500px;
  height: 600px;
  background-color: red;
  background-color: #ffffff;
  box-shadow: 0 10px 20px -6px #ababab;
  overflow: hidden;
  z-index: 9;
  position: fixed;
  left: 50%;
  top: 50%;
  border-radius: 8px;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.full-pic {
  width: 500px;
  height: 500px;
}
.full-pic img {
  max-width: 100%;
  max-height: 100%;
}
.detail-info {
  text-align: center;
  height: 100px;
  background-color: #f5f8f9;
  padding: 10px 0;
}
.b-title {
  font-size: 24px;
  font-weight: 600;
  box-sizing: border-box;
}
.tag-box {
  padding-top: 10px;
}
.tag-item {
  background-color: #4caf50;
  padding: 5px 15px;
  border-radius: 23px;
  color: #fff;
}
</style>