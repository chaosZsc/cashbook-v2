/** 消费标签表 */
export const TABLE_CONSUMPTION_TAGS = {
  name: 'consumptionTags',
  keyvals: [
    { key: 'pid', required: false, indexed: false },
    { key: 'name', required: true, indexed: false },
  ],
  defaultVal: { id: 1, name: '未分类' },
};

/** 收入标签表 */
export const TABLE_INCOME_TAGS = {
  name: 'incomeTags',
  keyvals: [
    { key: 'pid', required: false, indexed: false },
    { key: 'name', required: true, indexed: false },
  ],
  defaultVal: { id: 1, name: '未分类' },
};

/** 人员标签表 */
export const TABLE_USER_TAGS = {
  name: 'userTags',
  keyvals: [{ key: 'name', required: true, indexed: false }],
  defaultVal: { id: 1, name: '未知' },
};

/** 消费表 */
export const TABLE_CONSUMPTIONS = {
  name: 'consumptions',
  keyvals: [
    { key: 'amount', required: true, indexed: true },
    { key: 'comsumptionTagId', required: true, indexed: true },
    { key: 'userTagId', required: true, indexed: true },
    { key: 'date', required: true, indexed: true },
    { key: 'modifyTime', required: true, indexed: false },
    { key: 'remark', required: false, indexed: false },
  ],
};

/** 收入表 */
export const TABLE_INCOMES = {
  name: 'incomes',
  keyvals: [
    { key: 'amount', required: true, indexed: true },
    { key: 'incomeTagId', required: true, indexed: true },
    { key: 'userTagId', required: true, indexed: true },
    { key: 'date', required: true, indexed: true },
    { key: 'modifyTime', required: true, indexed: false },
    { key: 'remark', required: false, indexed: false },
  ],
};

/** 手帐数据库配置 */
export default {
  name: 'cashbook',
  version: 1,
  tables: [TABLE_CONSUMPTION_TAGS, TABLE_INCOME_TAGS, TABLE_USER_TAGS, TABLE_CONSUMPTIONS, TABLE_INCOMES],
};
