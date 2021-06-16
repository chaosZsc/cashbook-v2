import { message } from 'ant-design-vue';

import { makeConstCreator, assignStoreState } from '@/utils/tools';
import Base from '@/controls/base';

const base = new Base();
const makeConst = makeConstCreator('configuration');

// getters
/** 消费标签 */
export const consumptionTags = makeConst('consumptionTags');
/** 收入标签 */
export const incomeTags = makeConst('incomeTags');
/** 人员标签 */
export const userTags = makeConst('userTags');

// mutations
/** 设置消费标签 */
export const SET_CONSUMPTION_TAGS = makeConst('SET_CONSUMPTION_TAGS');
/** 设置收入标签 */
export const SET_INCOME_TAGS = makeConst('SET_INCOME_TAGS');
/** 设置人员标签 */
export const SET_USER_TAGS = makeConst('SET_USER_TAGS');

// actions
/** 设置消费标签 */
export const setConsumptionTags = makeConst('setConsumptionTags');
/** 设置收入标签 */
export const setIncomeTags = makeConst('setIncomeTags');
/** 设置人员标签 */
export const setUserTags = makeConst('setUserTags');

const configuration = {
  state: () => ({
    /** 消费标签 */
    consumptionTags: {
      loading: false,
      data: [],
    },
    /** 收入标签 */
    incomeTags: {
      loading: false,
      data: [],
    },
    /** 人员标签 */
    userTags: {
      loading: false,
      data: [],
    },
  }),

  getters: {
    [consumptionTags]: (state) => state.consumptionTags,
    [incomeTags]: (state) => state.incomeTags,
    [userTags]: (state) => state.userTags,
  },

  mutations: {
    [SET_CONSUMPTION_TAGS]: (state, payload) => assignStoreState(state.consumptionTags, payload),
    [SET_INCOME_TAGS]: (state, payload) => assignStoreState(state.incomeTags, payload),
    [SET_USER_TAGS]: (state, payload) => assignStoreState(state.userTags, payload),
  },

  actions: {
    [setConsumptionTags]: ({ state, commit }, forceUpdate) => {
      const {
        consumptionTags: { loading, data },
      } = state;
      if ((loading || data.length) && !forceUpdate) return;

      commit(SET_CONSUMPTION_TAGS, { loading: true });
      base
        .retrieve('consumptionTags')
        .then((res) => {
          commit(SET_CONSUMPTION_TAGS, { data: res });
        })
        .catch((err) => {
          const { msg } = err || {};
          message.error(msg || '查询失败');
        })
        .finally(() => {
          commit(SET_CONSUMPTION_TAGS, { loading: false });
        });
    },

    [setIncomeTags]: ({ state, commit }, forceUpdate) => {
      const {
        incomeTags: { loading, data },
      } = state;
      if ((loading || data.length) && !forceUpdate) return;

      commit(SET_INCOME_TAGS, { loading: true });
      base
        .retrieve('incomeTags')
        .then((res) => {
          commit(SET_INCOME_TAGS, { data: res });
        })
        .catch((err) => {
          const { msg } = err || {};
          message.error(msg || '查询失败');
        })
        .finally(() => {
          commit(SET_INCOME_TAGS, { loading: false });
        });
    },

    [setUserTags]: ({ state, commit }, forceUpdate) => {
      const {
        userTags: { loading, data },
      } = state;
      if ((loading || data.length) && !forceUpdate) return;

      commit(SET_USER_TAGS, { loading: true });
      base
        .retrieve('userTags')
        .then((res) => {
          commit(SET_USER_TAGS, { data: res });
        })
        .catch((err) => {
          const { msg } = err || {};
          message.error(msg || '查询失败');
        })
        .finally(() => {
          commit(SET_USER_TAGS, { loading: false });
        });
    },
  },
};

export default configuration;
