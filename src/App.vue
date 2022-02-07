<template>
  <div id="app">
    <!-- Remove uni-router if language routing is not required -->
    <uni-router shadow/>

    <uni-translate>Choose the option that suits you best:</uni-translate>

    <div>
      <uni-event-load url="lang-menu.json" prop="value">
        <uni-lang-menu-shadow mini round/>
      </uni-event-load>
      (Web Component) |
      <span><UniLangMenuCustom/>(Next Gen custom)</span>
    </div>

    <img alt="Vue logo" src="./assets/logo.png">

    <uni-translate>
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
