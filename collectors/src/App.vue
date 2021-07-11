<template>
  <div id="app">
    <FrameTest />
  </div>
</template>

<script>
import FrameTest from "./components/FrameTest";

export default {
  name: "App",
  components: {
    FrameTest,
  },
};
</script>



<style>
body {
  background-size: cover;
  position: relative;
  width: 100%;
  max-width: 1920px;
  min-width: 1240px;
  overflow: hidden;
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
</style>
