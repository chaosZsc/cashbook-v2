import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';

import { setConsumptionTags, setIncomeTags, setUserTags } from '@/store/configuration';

Vue.use(VueRouter);

export const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home'),
    meta: {
      title: '首页',
    },
  },
  {
    path: '/consumptionTagConfig',
    name: 'ConsumptionTagConfig',
    component: () => import(/* webpackChunkName: "consumptionTagConfig" */ '../views/ConsumptionTagConfig'),
    meta: {
      title: '消费标签配置',
    },
  },
  {
    path: '/incomeTagConfig',
    name: 'IncomeTagConfig',
    component: () => import(/* webpackChunkName: "incomeTagConfig" */ '../views/IncomeTagConfig'),
    meta: {
      title: '收入标签配置',
    },
  },
  {
    path: '/userTagConfig',
    name: 'UserTagConfig',
    component: () => import(/* webpackChunkName: "userTagConfig" */ '../views/UserTagConfig'),
    meta: {
      title: '人员标签配置',
    },
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  NProgress.start();
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

router.afterEach(() => {
  NProgress.done();
});

export default router;
