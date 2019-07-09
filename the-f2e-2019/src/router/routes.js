import Home from '@catalog/views/Home.vue';
import week1 from '@week-1/index';

const routes = [
  {
    path: '/',
    name: 'Catalog',
    component: Home,
    text: '目錄頁',
  },
  {
    path: '/week-1/',
    name: 'Week-1',
    component: week1,
    text: 'Week-1: 第一關 - 番茄鐘',
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
  // },
];

export default routes;
