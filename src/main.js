import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import goods from './components/goods/goods';
import seller from './components/seller/seller';
import ratings from './components/rating/ratings';

/* eslint-disable no-new */
Vue.use(VueRouter);

let app = Vue.extend(App);

let router = new VueRouter({
  linkActiveClass: 'active'
});

router.map({
  '/goods': {
    component: goods
  },
  '/ratings': {
    component: ratings
  },
  '/seller': {
    component: seller
  }
});

router.start(app, '#app');

router.go('/goods');
