import Home from '@catalog/views/Home.vue';

const routes = [
  {
    path: '/',
    name: '目錄頁',
    component: Home,
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
