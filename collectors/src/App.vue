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
  background-image: url("/static/img/bg.jpg");
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
