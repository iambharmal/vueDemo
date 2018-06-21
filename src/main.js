import Vue from 'vue';
import App from './App.vue';
import Message from './Message.vue'; //importing component

Vue.component('app-message', Message); //component declaration

new Vue({
  el: '#app',
  render: h => h(App)
})
