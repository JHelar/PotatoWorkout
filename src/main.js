import Vue from 'vue'
import VueRouter from 'vue-router';

import App from './App.vue'

import store from './vuex/store';
import router from './router/router';

import * as firebase from 'firebase';

Vue.use(VueRouter)

const fbConfig = {
  apiKey: "AIzaSyC312p8sgkOTJUhTfMW59o3TXotvmAYk8w",
  authDomain: "potatoworkout-d47e9.firebaseapp.com",
  databaseURL: "https://potatoworkout-d47e9.firebaseio.com",
  projectId: "potatoworkout-d47e9",
  storageBucket: "potatoworkout-d47e9.appspot.com",
  messagingSenderId: "137290873038"
};

const fbApp = firebase.initializeApp(fbConfig);


new Vue({
  el: '#app',
  router,
  store: store,
  render: h => h(App)
})