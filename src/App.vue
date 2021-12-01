<template>
  <div id="app">
    <uni-router shadow></uni-router>

    <div>
      <uni-lang-menu-shadow mini round routing list="lang-menu.json"></uni-lang-menu-shadow>
    </div>

    <img alt="Vue logo" src="./assets/logo.png">

    <uni-translate bind-start="${" bind-end="}">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </uni-translate>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
