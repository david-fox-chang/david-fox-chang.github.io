import Home from '@catalog/views/Home.vue';
import week1 from '@week-1/index';

const routes = [
  {
    path: '/',
    name: '目錄頁',
    component: Home,
  },
  {
    path: '/week-1/',
    name: 'week-1: 第一關 - 番茄鐘',
    component: week1,
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
