<template>
  <a-config-provider :locale="zhCN">
    <a-layout :class="$style.Root">
      <a-layout-sider v-model="collapsed" collapsible>
        <h1 :class="$style.Logo">
          <router-link to="/home">
            <a-icon type="account-book" />
            {{ collapsed ? '' : 'cashbook' }}
          </router-link>
        </h1>

        <main-menu />
      </a-layout-sider>

      <a-layout>
        <a-layout-header></a-layout-header>

        <a-layout-content>
          <router-view />
        </a-layout-content>

        <a-layout-footer> Cashbook ©2018 Created by ChaosZsc </a-layout-footer>
      </a-layout>
    </a-layout>
  </a-config-provider>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';

import { routes } from '@/router';

export default {
  name: 'App',

  components: {
    MainMenu: () => import('./components/MainMenu'),
  },

  data() {
    const routeMap = {};
    routes.forEach((route) => {
      const { name } = route;
      if (name) routeMap[name] = route;
    });

    return {
      zhCN,
      collapsed: false,
      routeMap,
    };
  },

  computed: {
    title(ctx) {
      const {
        $route: { name },
        routeMap,
      } = ctx;
      const { meta } = routeMap[name] || {};
      const { title } = meta || {};
      return title;
    },
  },
};
</script>

<style lang="scss" module>
.Root {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  & :global {
    .ant-layout {
      &-content {
        overflow: hidden;
      }

      &-footer {
        text-align: center;
      }
    }
  }
}

.Logo {
  height: 32px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 16px;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: #ffffff;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>
