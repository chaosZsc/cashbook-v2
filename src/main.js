import Vue from 'vue';
import 'nprogress/nprogress.css';
import {
  Button,
  Icon,
  Row,
  Col,
  Layout,
  Breadcrumb,
  Menu,
  PageHeader,
  Pagination,
  DatePicker,
  FormModel,
  Input,
  InputNumber,
  Select,
  Calendar,
  Card,
  Carousel,
  Descriptions,
  Empty,
  Statistic,
  Table,
  Tabs,
  Tag,
  Timeline,
  Tooltip,
  message,
  Modal,
  notification,
  Spin,
  ConfigProvider,
} from 'ant-design-vue';
import moment from 'moment';
import 'moment/locale/zh-cn';

import App from './App';
import router from './router';
import store from './store';

const components = [
  Button,
  Icon,
  Row,
  Col,
  Layout,
  Breadcrumb,
  Menu,
  PageHeader,
  Pagination,
  DatePicker,
  FormModel,
  Input,
  InputNumber,
  Select,
  Calendar,
  Card,
  Carousel,
  Descriptions,
  Empty,
  Statistic,
  Table,
  Tabs,
  Tag,
  Timeline,
  Tooltip,
  Modal,
  Spin,
  ConfigProvider,
];
components.forEach((component) => Vue.use(component));
Vue.prototype.$message = message;
Vue.prototype.$notification = notification;
Vue.prototype.$confirm = Modal.confirm;

moment.locale('zh-cn');

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
