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
  overflow: hidden;
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
}
.tag-item:hover,
.tag-item.active {
  color: #fff;
  background-color: #cf3100;
}
</style>
