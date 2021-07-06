<template>
  <div id="app">
    <FrameTest/>
  </div>
</template>

<script>
import FrameTest from './components/FrameTest'

export default {
  name: 'App',
  components: {
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
