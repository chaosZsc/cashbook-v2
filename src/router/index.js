import Vue from 'vue';
import VueRouter from 'vue-router';

import { setConsumptionTags, setIncomeTags, setUserTags } from '@/store/configuration';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About'),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  const {
    app: {
      $options: {
        store: { dispatch },
      },
    },
  } = router;
  [setConsumptionTags, setIncomeTags, setUserTags].forEach((action) => dispatch(action));
  next();
});

export default router;
