import Vue from 'vue';

/**
 * 状态机参数命名
 *
 * @param {string} prefix 前缀
 * @returns {string} 拼接参数名
 */
export const makeConstCreator = (prefix) => {
  const constantList = [];
  return (constant) => {
    const name = `${prefix}/${constant}`;
    if (constantList.includes(name)) {
      throw new Error(`Duplicated store constants: ${name}`);
    } else {
      constantList.push(name);
      return name;
    }
  };
};

/**
 * 响应式修改状态
 *
 * @param {Object} state 待修改状态
 * @param {Object} payload 修改参数
 */
export const assignStoreState = (state, payload) => {
  Object.keys(payload).forEach((key) => {
    if (state[key] !== payload[key]) Vue.set(state, key, payload[key]);
  });
};
