<template>
  <div
    class="item-box"
    :style="'background-image: url(' + thumbUrl + char.id + '.png);'"
  >
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
      type: Object
    }
  },
  data() {
    return {
      char: this.character,
      thumbUrl: "./static/img/ultraman/thumb/"
    };
  },
  methods: {}
};
</script>
<style scoped>
.item-box {
  width: 155px;
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
  background-color: #1946ba;
  bottom: 0;
  font-size: 12px;
  padding: 4px;
  box-sizing: border-box;
}
</style>
