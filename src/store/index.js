import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    filterCount: 0,
    stockOnly: false,
    deliveryIncluded: false,
    deliveryOption: "",
    sortOption: "",
    variants: "",
    unverified: "",
    authorized: "",
    international: "",
  },
  getters: {
    getVariants(state) {
      return state.variants;
    },
    getUnverified(state) {
      return state.unverified;
    },
    getAuthorized(state) {
      return state.authorized;
    },
    getInternational(state) {
      return state.international;
    },
    getFilterCount(state) {
      return state.filterCount;
    },
    getStockOnly(state) {
      return state.stockOnly;
    },
    getDeliveryIncluded(state) {
      return state.deliveryIncluded;
    },
    getDeliveryOption(state) {
      return state.deliveryOption;
    },
    getSortOption(state) {
      return state.sortOption;
    },
  },
  mutations: {
    setVariants(state, payload) {
      state.variants = payload;
    },
    setUnverified(state, payload) {
      state.unverified = payload;
    },
    setAuthorized(state, payload) {
      state.authorized = payload;
    },
    setInternational(state, payload) {
      state.international = payload;
    },
    setFilterCount(state, payload) {
      state.filterCount = payload;
    },
    setStockOnly(state, payload) {
      state.stockOnly = payload;
    },
    setDeliveryIncluded(state, payload) {
      state.deliveryIncluded = payload;
    },
    setDeliveryOption(state, payload) {
      state.deliveryOption = payload;
    },
    setSortOption(state, payload) {
      state.sortOption = payload;
    },
  },
  actions: {},
  modules: {},
});
