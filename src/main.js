import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'


/* eslint-disable no-new */
Vue.use(VueRouter);
Vue.use(VueResource);

import Dashborad from './components/Dashboard.vue';
import Account from './components/Account.vue';
import Position from './components/Position.vue';

const routes = [
  { path: '/', component: Dashborad },
  { path: '/account', component: Account },
  { path: '/position', component: Position }
];

const router = new VueRouter({
  routes
});

export const getAccount = () => {
  
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// });
