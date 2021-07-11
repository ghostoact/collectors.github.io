<template>
  <div
    class="prop-item"
    :style="'background-image: url(' + thumbUrl + propitem.id + '.jpg);'"
  >
    <div class="item-title">
      {{ propitem.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "PropItem",
  props: {
    item: {
      type: Object,
    },
  },
  data() {
    return {
      propitem: this.item,
      thumbUrl: "./static/img/item/trigger/hyperkey/",
    };
  },
  methods: {},
};
</script>

<style scoped>
.prop-item {
  width: 160px;
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
</style>