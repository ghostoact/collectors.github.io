<template>
  <div
    class="prop-item"
    :class="'grid-' + gridNum"
    v-lazy:background-image="showpic ? url + propitem.pic : ''"
  >
    <div class="item-title" :style="'background-color:' + color">
      {{ propitem.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "PropItem",
  props: {
    item: {
      //信息
      type: Object
    },
    urlType: {
      //区别图片URL
      type: Number
    },
    showPic: {
      //是否显示图片
      type: Boolean,
      default: true
    },
    defaultColor: {
      //默认barColor
      type: String,
      default: "#c3370b"
    },
    barColor: {
      //设置color
      type: String,
      default: null
    },
    gridNum: {
      //设置一排数量
      type: Number,
      default: 3
    }
  },
  data() {
    return {
      propitem: this.item,
      showpic: this.showPic,
      thumbUrl: [
        "./static/img/item/trigger/hyperkey/",
        "./static/img/item/z/ultramedal/",
        "./static/img/item/sofubi/500/",
        "./static/img/item/SHF/"
      ]
    };
  },
  methods: {},
  computed: {
    url() {
      return this.thumbUrl[this.urlType];
    },
    color() {
      return this.barColor != null ? this.barColor : this.defaultColor;
    }
  }
};
</script>

<style scoped>
.prop-item {
  width: 172px;
  height: 160px;
  float: left;
  background-color: #f8f8f8;
  margin: 0 5px 5px 0;
  background-size: cover;
  background-position: center;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background-size: contain;
  background-repeat: no-repeat;
}
.prop-item:hover {
  opacity: 0.8;
}

.prop-item .item-title {
  position: absolute;
  width: 100%;
  text-align: center;
  color: #fff;
  background-color: #c3370b;
  bottom: 0;
  font-size: 12px;
  padding: 4px;
  box-sizing: border-box;
}
@media (max-width: 1024px) {
  .prop-item {
    margin: 0 2px 4px;
  }
  .prop-item .item-title {
    font-size: 12px;
  }
  .prop-item.grid-3 {
    width: calc(33% - 4px);
    height: 125px;
  }
  .prop-item.grid-4 {
    width: calc(25% - 4px);
    height: 80px;
  }
  .prop-item.grid-5 {
    width: calc(20% - 4px);
    height: 60px;
  }
  .prop-item.grid-5 .item-title {
    display: none;
  }
}
</style>
