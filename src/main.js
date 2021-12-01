import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

// Tell Vue to ignore all components defined in the uni-components package.
// The regex assumes all components names are prefixed 'uni'
Vue.config.ignoredElements = [/uni-\w*/];

new Vue({
  render: h => h(App),
}).$mount('#app')
