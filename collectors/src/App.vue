<template>
  <div id="app">
    <div class="logo"></div>
    <div class="menu-btn" @click="showMenuByMT">
      <i class="iconfont icon-caidan"></i>
    </div>
    <div class="menu-box" :class="{ show: showMenu }">
      <div class="menu-warp">
        <router-link
          class="menu-item"
          @click.native="showMenuByMT"
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
    Index,
  },
  data() {
    return {
      showMenu: false,
      menu: [
        {
          name: "奥特曼",
          url: "/",
        },
        {
          name: "特利迦·胜利超越之钥",
          url: "/HyperKey",
        },
        {
          name: "泽塔·奥特勋章",
          url: "/UltraMedal",
        },
        {
          name: "软胶",
          url: "/Sofubi",
        },
        {
          name: "S.H.F",
          url: "/SHF",
        },
        {
          name: "模玩价格参考",
          url: "/Trend",
        },
        {
          name: "扭蛋机模拟器",
          url: "/Gashapon",
        },
      ],
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
    cnzzEvent: function (category, action, label, value, nodeid) {
      //cnzz事件统计
      if (window._czc) {
        czc.push(["_trackEvent", category, action, label, value, nodeid]);
      }
    },
    showMenuByMT() {
      this.showMenu = this.showMenu ? false : true;
      console.log(this.showMenu);
    },
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
    },
  },
};
</script>

<style>
body {
  background-size: contain;
  position: relative;
  width: 100%;
  max-width: 1920px;
  min-width: 1240px;
  margin: 0 auto;
  z-index: 1;
}

@media (max-width: 1024px) {
  body {
    max-width: unset;
    min-width: unset;
  }
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.menu-btn {
  position: fixed;
  color: #fff;
  right: 0;
  top: 0;
  text-align: center;
  width: 40px;
  height: 40px;
  line-height: 40px;
  display: none;
  z-index: 9999;
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
@media (max-width: 1024px) {
  .menu-btn {
    display: block;
  }
  .menu-box {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9998;
    background-color: rgb(89 89 89 / 53%);
    -webkit-filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.2));
    filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.2));
    -webkit-backdrop-filter: saturate(180%) blur(8px);
    backdrop-filter: saturate(180%) blur(8px);
  }
  .menu-box.show {
    display: block;
  }
  .menu-warp {
    width: 100%;
    height: 100%;
    padding-top: 60px;
  }
  .menu-item {
    width: 79%;
    background-color: #ffffff2b;
    margin: 0 auto 14px;
    float: unset;
    /* padding: 27px 0; */
    display: block;
    padding: 0;
    height: 55px;
    line-height: 55px;
    border-radius: 6px;
  }
}
</style>
