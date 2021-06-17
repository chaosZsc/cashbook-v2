const menus = Object.freeze([
  {
    root: true,
    key: 'home',
    title: '首页',
    icon: 'home',
  },
  {
    root: true,
    key: 'configuration',
    title: '配置',
    icon: 'setting',
    children: Object.freeze([
      {
        key: 'consumptionTagConfig',
        title: '消费标签配置',
      },
      {
        key: 'incomeTagConfig',
        title: '收入标签配置',
      },
      {
        key: 'userTagConfig',
        title: '人员标签配置',
      },
    ]),
  },
]);

export default menus;
