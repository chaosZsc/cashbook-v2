<template>
  <a-config-provider :locale="zhCN">
    <a-layout :class="$style.Root">
      <a-layout-sider v-model="collapsed" collapsible>
        <h1 :class="$style.Logo">
          <a-icon type="account-book" />
          {{ collapsed ? '' : 'cashbook' }}
        </h1>
      </a-layout-sider>

      <a-layout>
        <a-layout-header> </a-layout-header>

        <a-layout-content>
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-config-provider>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';

export default {
  name: 'App',

  data() {
    return {
      zhCN,
      collapsed: false,
    };
  },
};
</script>

<style lang="scss" module>
.Root {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
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
