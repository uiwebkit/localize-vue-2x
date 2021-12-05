<template>
  <div id="app">
    <!-- Remove if language routing is not required -->
    <uni-router shadow></uni-router>

    <uni-translate bind-start="${" bind-end="}">Choose the option that suits you best:</uni-translate>

    <div>
      <uni-lang-menu-shadow mini round routing type="local" list="lang-menu.json"></uni-lang-menu-shadow>(Web Component)
      | <span><UniLangMenuCustom/>(Next Gen custom)</span>
    </div>

    <img alt="Vue logo" src="./assets/logo.png">

    <uni-translate bind-start="${" bind-end="}">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </uni-translate>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import UniLangMenuCustom from '@/components/UniLangMenuCustom.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    UniLangMenuCustom
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
