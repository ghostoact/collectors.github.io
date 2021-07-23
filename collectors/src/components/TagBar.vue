<template>
  <div class="tags-bar">
    <div
      class="tag-item"
      :class="nowTag == tag.name ? 'active' : ''"
      v-for="tag in tagsData"
      :key="tag.name"
      @click="getDataByTag(tag.name)"
    >
      {{ tag.title }}
      <div class="tag-progress">
        <div
          class="tag-prog"
          :class="tag.own / tag.count == 1 ? 'full' : ''"
          :style="'width:' + (tag.own / tag.count) * 100 + '%'"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TagBar",
  props: {
    tags: {
      type: Array
    }
  },
  data() {
    return {
      tagsData: this.tags,
      nowTag: "ALL"
    };
  },
  methods: {
    getDataByTag(tag) {
      this.nowTag = tag;
      this.$emit("parentEvent", tag);
    }
  }
};
</script>

<style scoped>
.tags-bar {
  margin-bottom: 10px;
  display: inline-block;
  width: 100%;
}
.tag-item {
  float: left;
  color: #fff;
  padding: 0 15px;
  height: 25px;
  line-height: 25px;
  border-radius: 18px;
  margin-right: 2px;
  cursor: pointer;
  position: relative;
}
.tag-item:hover,
.tag-item.active {
  color: #fff;
  background-color: #cf3100;
}
.tag-progress {
  position: absolute;
  top: -5px;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #ffffff5c;
}
.tag-prog {
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 100%;
  background-color: #ffffff87;
  transition: width 0.8s;
}
.tag-prog.full {
  background-color: #8bc34a;
}
</style>
