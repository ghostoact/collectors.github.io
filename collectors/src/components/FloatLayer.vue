<template>
  <div class="float-layer" v-if="show">
    <div class="close-layer" @click="closeThis">
      <i class="iconfont icon-fanhuicopy"></i>
    </div>
    <div class="full-pic">
      <img :src="showpic ? url + item.id + '.jpg' : ''" />
    </div>
    <div class="detail-info">
      <div class="unique-code" v-if="item.code != null" title="通用万能识别码">
        <div
          class="code-line"
          :class="'c-' + c"
          v-for="c in item.code"
          :key="c"
        >
          <div class="code-block"></div>
          <div class="code-block"></div>
          <div class="code-block"></div>
        </div>
        <p class="code-num" v-html="item.code.join('')"></p>
      </div>
      <p class="b-title">{{ item.name }}</p>
      <p class="item-way" v-if="[0, 1].indexOf(urlType) != -1">
        {{ item.way }}
      </p>
      <p class="tag-box" v-if="[0, 1].indexOf(urlType) != -1">
        <span class="tag-item" v-for="tag in item.tag" :key="tag">{{
          tag
        }}</span>
      </p>
      <p class="tag-box" v-if="[2].indexOf(urlType) != -1">
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
        "/static/img/item/SHF/",
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
  text-align: center;
}
.full-pic img {
  max-width: 100%;
  max-height: 100%;
}
.detail-info {
  text-align: center;
  background-color: #f5f8f9;
  padding: 10px 0 20px;
}
.b-title {
  font-size: 22px;
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
.item-way {
  font-size: 14px;
  margin: 4px 0;
  color: #4caf50;
}
.unique-code {
  position: absolute;
  left: 15px;
  bottom: 10px;
}
.code-line {
  height: 5px;
  width: 30px;
  margin-top: 2px;
}
.code-line:nth-child(4) {
  height: 6px;
  margin-top: 4px;
}
.code-block {
  float: left;
  width: 10px;
  height: 100%;
  background-color: #000;
  opacity: 0;
}
.code-num {
  font-size: 12px;
  text-align: center;
  margin-top: 3px;
  letter-spacing: 1px;
}
.code-line.c-0 .code-block:nth-child(2),
.code-line.c-0 .code-block:nth-child(3) {
  opacity: 1;
}
.code-line.c-1 .code-block:nth-child(3) {
  opacity: 1;
}
.code-line.c-2 .code-block:nth-child(2) {
  opacity: 1;
}
.code-line.c-3 .code-block:nth-child(1) {
  opacity: 1;
}
.code-line.c-4 .code-block:nth-child(1),
.code-line.c-4 .code-block:nth-child(2) {
  opacity: 1;
}
.code-line.c-5 .code-block:nth-child(1),
.code-line.c-5 .code-block:nth-child(3) {
  opacity: 1;
}
.code-line.c-6 .code-block:nth-child(1),
.code-line.c-6 .code-block:nth-child(2),
.code-line.c-6 .code-block:nth-child(3) {
  opacity: 1;
}
</style>
