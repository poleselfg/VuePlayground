import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import Test from "./components/test.vue";
import Users from "./components/user.vue";
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    {
      path: "/",
      component: Users,
    },
    {
      path: "/test",
      component: Test,
    },
  ],
});

new Vue({
  router,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
