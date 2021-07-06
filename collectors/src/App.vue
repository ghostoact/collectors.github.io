<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <FrameTest/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import FrameTest from './components/FrameTest'

export default {
  name: 'App',
  components: {
    HelloWorld,
    FrameTest
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
