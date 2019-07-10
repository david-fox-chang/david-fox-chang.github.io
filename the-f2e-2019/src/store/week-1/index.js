import ListCollect from './list-collect.class';
import ListItem from './list-item.class';

export default {
  namespaced: true,
  state: {
    item: new ListItem({ name: 'input' }),
    listCollect: new ListCollect(),
    takeBreak: new ListItem({ name: 'takeBreak' }),
  },
  getters: {},
  mutations: {},
  actions: {},
};
