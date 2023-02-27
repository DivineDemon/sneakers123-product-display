import Vue from "vue";
import VModal from "vue-js-modal";

import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/tailwind.css";

Vue.config.productionTip = false;
Vue.use(VModal);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
