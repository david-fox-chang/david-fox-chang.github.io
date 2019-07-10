import Vue from 'vue';
import Vuex from 'vuex';
import week1 from "./week-1/";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    'week-1': week1,
  },
});
