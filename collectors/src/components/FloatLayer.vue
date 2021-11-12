<template>
  <div class="float-layer" v-if="show">
    <div class="close-layer" @click="closeThis">
      <i class="iconfont icon-fanhuicopy"></i>
    </div>
    <div class="full-pic">
      <div class="ctrl-left" @click="toPre" v-if="item.gallery != null">
        <i class="iconfont icon-left"></i>
      </div>
      <div class="ctrl-right" @click="toNext" v-if="item.gallery != null">
        <i class="iconfont icon-right"></i>
      </div>
      <img :src="showpic ? url + item.pic : ''" v-if="item.gallery == null" />
      <img
        :src="showpic ? galleryUrl + item.id + '/' + galleryIndex + '.jpg' : ''"
        v-if="item.gallery != null"
      />
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
      <div
        v-if="[0].indexOf(urlType) != -1"
        class="sounds-mode"
        :class="{ key: item.selfSound }"
        :title="item.selfSound ? '自发声' : '海帕枪发声'"
      ></div>
      <p class="b-title">
        {{ item.name
        }}<span v-if="[0].indexOf(urlType) != -1"
          >&nbsp;{{ item.property }}</span
        >
      </p>
      <p class="item-way" v-if="[0, 1].indexOf(urlType) != -1">
        {{ item.way }}
      </p>
      <p class="tag-box" v-if="[0, 1].indexOf(urlType) != -1">
        <span class="tag-item" v-for="tag in item.tag" :key="tag">{{
          tag
        }}</span>
      </p>
      <p class="item-way" v-if="[3].indexOf(urlType) != -1">
        {{ item.date }} 首发
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
      default: {}
    },
    show: {
      type: Boolean
    },
    urlType: {
      type: Number
    },
    showPic: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      showpic: this.showPic,
      galleryIndex: 1,
      galleryUrl: "./static/img/item/SHF/gallery/",
      thumbUrl: [
        "./static/img/item/trigger/hyperkey/",
        "./static/img/item/z/ultramedal/",
        "./static/img/item/sofubi/500/",
        "./static/img/item/SHF/"
      ]
    };
  },
  methods: {
    closeThis() {
      this.galleryIndex = 1;
      this.$emit("parentEvent", false);
    },
    toPre() {
      if (this.galleryIndex == 1) {
        this.galleryIndex = this.item.gallery;
      } else {
        this.galleryIndex--;
      }
    },
    toNext() {
      if (this.galleryIndex == this.item.gallery) {
        this.galleryIndex = 1;
      } else {
        this.galleryIndex++;
      }
    }
  },
  computed: {
    url() {
      return this.thumbUrl[this.urlType];
    }
  }
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
  line-height: 500px;
  text-align: center;
}
.full-pic img {
  max-width: 100%;
  max-height: 100%;
  vertical-align: middle;
}
@media (max-width: 1024px) {
  .float-layer {
    width: calc(100% - 6px);
    margin: 0;
  }
  .full-pic {
    width: 100%;
  }
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
.sounds-mode {
  position: absolute;
  right: 22px;
  bottom: 25px;
  background-image: url("../assets/img/trigger/sounds_mode.png");
  width: 34px;
  height: 30px;
  background-position: 0 0;
}
.sounds-mode.key {
  background-position: -34px 0;
}
.ctrl-left,
.ctrl-right {
  width: 40px;
  height: 70px;
  line-height: 70px;
  text-align: center;
  position: absolute;
  top: 40%;
  left: 0;
  cursor: pointer;
  color: #fff;
  background-color: #00000030;
}
.ctrl-left:hover,
.ctrl-right:hover {
  background-color: #00000042;
}
.ctrl-right {
  left: auto;
  right: 0;
}
</style>
