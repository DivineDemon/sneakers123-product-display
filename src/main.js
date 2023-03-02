import Vue from "vue";
import VModal from "vue-js-modal";
import VueCarousel from "vue-carousel";

import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/tailwind.css";

Vue.config.productionTip = false;

// Components
Vue.use(VModal);
Vue.use(VueCarousel);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
