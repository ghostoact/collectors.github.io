<template>
  <div class="item-box" v-lazy:background-image="thumbUrl + char.id + '.png'">
    <div class="item-title">
      {{ char.name.zh }}
    </div>
  </div>
</template>

<script>
export default {
  name: "CharacterItem",
  props: {
    character: {
      type: Object,
    },
  },
  data() {
    return {
      char: this.character,
      thumbUrl: "./static/img/ultraman/thumb/",
    };
  },
  methods: {},
};
</script>
<style scoped>
.item-box {
  width: 172px;
  height: 120px;
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
.item-box:hover {
  opacity: 0.8;
}

.item-box .item-title {
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
  .item-box {
    width: calc(33% - 4px);
    margin: 0 2px 4px;
  }
}
</style>
