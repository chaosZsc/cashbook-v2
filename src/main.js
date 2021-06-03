import Vue from 'vue';
import { Button } from 'ant-design-vue';

import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(Button);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
