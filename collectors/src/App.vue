<template>
  <div id="app">
    <div class="logo"></div>
    <div class="menu-box">
      <div class="menu-warp">
        <router-link
          class="menu-item"
          v-for="(m, i) in menu"
          :to="m.url"
          :key="i"
          >{{ m.name }}</router-link
        >
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Index from "@/view/Index/Index";

export default {
  name: "App",
  components: {
    Index
  },
  data() {
    return {
      menu: [
        {
          name: "奥特曼",
          url: "/"
        },
        {
          name: "特利迦·胜利超越之钥",
          url: "/HyperKey"
        },
        {
          name: "泽塔·奥特勋章",
          url: "/UltraMedal"
        },
        {
          name: "软胶",
          url: "/Sofubi"
        },
        {
          name: "趋势",
          url: "/Trend"
        }
      ]
    };
  },
  methods: {
    initCNZZ() {
      //添加脚本
      const script = document.createElement("script");
      script.src =
        "https://v1.cnzz.com/z_stat.php?id=1280107716&web_id=1280107716";
      script.language = "JavaScript";
      script.id = "cnzz";
      document.body.appendChild(script);
    },
    cnzzEvent: function(category, action, label, value, nodeid) {
      //cnzz事件统计
      if (window._czc) {
        czc.push(["_trackEvent", category, action, label, value, nodeid]);
      }
    }
  },
  mounted() {
    this.initCNZZ();
  },
  watch: {
    $route() {
      if (window._czc) {
        //监听路由变化
        let location = window.location;
        let contentUrl = location.pathname + location.hash;
        let refererUrl = "/";
        window._czc.push(["_trackPageview", contentUrl, refererUrl]);
      }
    }
  }
};
</script>

<style>
body {
  background-size: cover;
  position: relative;
  width: 100%;
  max-width: 1920px;
  min-width: 1240px;
  height: 1200px;
  margin: 0 auto;
  z-index: 1;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.menu-box {
  text-align: center;
  height: 100px;
}
.menu-warp {
  display: inline-block;
}
.menu-item {
  /* display: inline-block; */
  float: left;
  height: 100px;
  line-height: 100px;
  color: #fff;
  cursor: pointer;
  padding: 0 20px;
  text-decoration: none;
}
.menu-item:hover {
  background-color: #ffffff24;
}
</style>
