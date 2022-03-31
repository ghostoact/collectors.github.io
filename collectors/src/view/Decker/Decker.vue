<template>
  <div class="item-list" :class="{ 'collect-status': collectStatus }">
    <floatLayer
      :show="layerShow"
      :item="nowDetail"
      :urlType="4"
      @parentEvent="hideDetail"
    />
    <div class="ctrl-panel">
      <div
        class="switch-box"
        :class="{ active: collectFilter }"
        @click="getCollectFilter"
      >
        <div class="switch-label">过滤已拥有的</div>
        <div class="switch-btn"></div>
      </div>
      <div
        class="btn"
        v-text="collectStatus ? '退出标记模式' : '标记我已拥有的'"
        @click="collectToggle"
      ></div>
      <tagBar :tags="tags" @parentEvent="getDataByTag" />
    </div>
    <propItem
      v-for="hk in nowList"
      v-bind:item="hk"
      :class="{ collect: getCollect(hk.id) }"
      :urlType="4"
      :showPic="true"
      :key="hk.id"
      :defaultColor="'#5420ae'"
      :barColor="hk.color"
      @click.native="showDetail(hk)"
      v-show="collectFilter == false || !getCollect(hk.id)"
    />
  </div>
</template>

<script>
import PropItem from "@/components/PropItem";
import TagBar from "@/components/TagBar";
import FloatLayer from "@/components/FloatLayer";
export default {
  name: "Decker",
  components: {
    PropItem,
    TagBar,
    FloatLayer,
  },
  data() {
    return {
      tags: [
        {
          name: "ALL",
          title: "全部",
          count: 0,
          own: 0,
        },
        {
          name: "DX",
          title: "DX",
          count: 0,
          own: 0,
        },
        {
          name: "DX01",
          title: "DX01",
          count: 0,
          own: 0,
        },
        {
          name: "DX02",
          title: "DX02",
          count: 0,
          own: 0,
        },
      ],
      nowList: null, //展示列表
      nowDetail: null,
      layerShow: false,
      collectStatus: false, //标记模式
      collectFilter: false, //过滤已拥有的
      collectList: [], //收藏列表
      dataList: [
        {
          id: "D-1",
          type: "U",
          tag: ["DX"],
          name: "德凯奥特曼 闪亮型",
          link: null,
          color: "#018dd1",
          way: "",
          pic: "D-1.jpg",
        },
        {
          id: "D-2",
          type: "U",
          tag: ["DX"],
          name: "德凯奥特曼 强壮型",
          link: null,
          color: "#018dd1",
          way: "",
          pic: "D-2.jpg",
        },
        {
          id: "D-3",
          type: "U",
          tag: ["DX02"],
          name: "德凯奥特曼 奇迹型",
          link: null,
          color: "#018dd1",
          way: "",
          pic: "D-3.jpg",
        },
        {
          id: "D-4",
          type: "U",
          tag: ["DX01"],
          name: "赛罗奥特曼",
          link: null,
          color: "#018dd1",
          way: "",
          pic: "D-4.jpg",
        },
        {
          id: "D-5",
          type: "U",
          tag: ["DX01"],
          name: "泽塔奥特曼 原生形态",
          link: null,
          color: "#018dd1",
          way: "",
          pic: "D-5.jpg",
        },
        {
          id: "D-6",
          type: "U",
          tag: ["DX01"],
          name: "贝利亚奥特曼",
          link: null,
          color: "#018dd1",
          way: "",
          pic: "D-6.jpg",
        },
        {
          id: "D-7",
          type: "U",
          tag: ["DX02"],
          name: "捷德奥特曼",
          link: null,
          color: "#018dd1",
          way: "",
          pic: "D-7.jpg",
        },
        {
          id: "D-8",
          type: "U",
          tag: ["DX02"],
          name: "罗索奥特曼",
          link: null,
          color: "#018dd1",
          way: "",
          pic: "D-8.jpg",
        },
        {
          id: "D-9",
          type: "U",
          tag: ["DX02"],
          name: "布鲁奥特曼",
          link: null,
          color: "#018dd1",
          way: "",
          pic: "D-9.jpg",
        },
        {
          id: "D-10",
          type: "U",
          tag: ["DX02"],
          name: "泰迦奥特曼",
          link: null,
          color: "#018dd1",
          way: "",
          pic: "D-10.jpg",
        },
        {
          id: "D-11",
          type: "U",
          tag: ["DX"],
          name: "卡片11",
          link: null,
          color: "#018dd1",
          way: "",
          pic: "D-11.jpg",
        },
        {
          id: "D-12",
          type: "U",
          tag: ["DX"],
          name: "卡片12",
          link: null,
          color: "#018dd1",
          way: "",
          pic: "D-12.jpg",
        },
        {
          id: "D-13",
          type: "U",
          tag: ["DX"],
          name: "特空机2号 乌英达姆",
          link: null,
          color: "#018dd1",
          way: "",
          pic: "D-13.jpg",
        },
        {
          id: "D-14",
          type: "U",
          tag: ["DX01"],
          name: "特空机1号 赛文加",
          link: null,
          color: "#018dd1",
          way: "",
          pic: "D-14.jpg",
        },
        {
          id: "D-15",
          type: "U",
          tag: ["DX01"],
          name: "卡片15",
          link: null,
          color: "#018dd1",
          way: "",
          pic: "D-15.jpg",
        },
        {
          id: "D-16",
          type: "U",
          tag: ["DX01"],
          name: "卡片16",
          link: null,
          color: "#018dd1",
          way: "",
          pic: "D-16.jpg",
        },
        {
          id: "D-17",
          type: "U",
          tag: ["DX02"],
          name: "卡片17",
          link: null,
          color: "#018dd1",
          way: "",
          pic: "D-17.jpg",
        },
      ],
    };
  },
  methods: {
    getDataByTag(tag) {
      if (tag == "ALL") {
        this.nowList = this.dataList;
      } else {
        this.nowList = this.getListByTag(tag);
      }
    },
    // 根据tag标签获取数据
    getListByTag(tag) {
      let arr = [];
      this.dataList.forEach((item, index, array) => {
        if (item.tag.indexOf(tag) != -1) {
          arr.push(item);
        }
      });
      return arr;
    },
    // 根据collectStatus状态,进行收藏模式与详情模式切换
    showDetail(item) {
      if (this.collectStatus) {
        // 收藏模式
        if (this.collectList.indexOf(item.id) == -1) {
          this.collectList.push(item.id); //新增项
        } else {
          this.collectList.splice(this.collectList.indexOf(item.id), 1); //删除项
        }
        this.$Tools.$setStroage("decker", this.collectList); //保存最新数据
        this.getCollectProgress();
      } else {
        // 详情模式
        this.layerShow = true;
        this.nowDetail = item;
      }
    },
    // 隐藏详情
    hideDetail(visible) {
      this.layerShow = visible;
    },
    // 加载收藏数据
    getCollectData() {
      this.collectList =
        this.$Tools.$getStroage("decker") != null
          ? this.$Tools.$getStroage("decker")
          : [];
    },
    // 切换收藏状态
    collectToggle() {
      this.collectStatus = this.collectStatus ? false : true;
    },
    // 获取拥有状态
    getCollect(id) {
      return this.collectList.indexOf(id) != -1; //返回true为已标记
    },
    //过滤已拥有的
    getCollectFilter() {
      this.collectFilter = this.collectFilter ? false : true;
    },
    // 获取收藏进程
    // 表示有 !=-1
    getCollectProgress() {
      this.tags.forEach((i, num, arr) => {
        this.tags[num].count = 0;
        this.tags[num].own = 0;
      });
      this.tags[0].count = this.dataList.length;
      this.tags[0].own = this.collectList.length;
      this.dataList.forEach((item, index, array) => {
        this.tags.forEach((i, num, arr) => {
          //获得总数
          if (item.tag[0].indexOf(i.name) != -1) {
            this.tags[num].count = this.tags[num].count + 1;
          }
          //获得已拥有数
          if (
            this.collectList.indexOf(item.id) != -1 &&
            this.tags[num].name == item.tag[0]
          ) {
            this.tags[num].own = this.tags[num].own + 1;
          }
        });
      });
    },
  },
  created() {
    this.nowList = this.dataList;
    this.getCollectData();
    this.getCollectProgress();
  },
};
</script>

<style scoped></style>
