import { openDB } from 'idb';
import { flatten, intersectionBy } from 'lodash';

import config from './config';

/** 基础仓库类型 */
export default class Base {
  constructor() {
    const { name: dbName, version, tables } = config;
    this.database = openDB(dbName, version, {
      async upgrade(db) {
        tables.forEach((table) => {
          const { name: tableName, keyvals } = table;
          const store = db.createObjectStore(tableName, {
            keyPath: 'id',
            autoIncrement: true,
          });

          const indexes = keyvals.filter(({ indexed }) => indexed).map(({ key }) => key);
          ['id', ...indexes].forEach((key) => store.createIndex(key, key));
        });
      },
    });
    this.init();
  }

  /** 数据库表初始化 */
  async init() {
    const init = localStorage.getItem('@init');
    if (init) return;

    const { tables } = config;
    const db = await this.database;
    const oprations = tables.filter(({ defaultVal }) => !!defaultVal).map(({ name, defaultVal }) => db.add(name, defaultVal));
    await Promise.all(oprations);
    localStorage.setItem('@init', true);
  }

  /**
   * 新增表内容
   *
   * @param {String} tableName 表名
   * @param {Object} payload 条目内容
   * @returns {Promise}
   */
  async create(tableName, payload) {
    const db = await this.database;
    return db.add(tableName, payload);
  }

  /**
   * 查询表内容
   *
   * @param {String} tableName 表名
   * @param {Object} payload 查询条件
   * @returns {Promise}
   */
  async retrieve(tableName, payload) {
    const db = await this.database;
    const indexes = Object.keys(payload);
    const oprations = indexes.map((key) => db.getAllFromIndex(tableName, key, payload[key]));
    return Promise.all(oprations).then((res) => {
      if (res.length <= 1) return flatten(res);
      return intersectionBy(...res, 'id');
    });
  }

  /**
   * 更新表内容
   *
   * @param {String} tableName 表名
   * @param {Number} id 条目 ID
   * @param {Object} payload 条目内容
   * @returns {Promise}
   */
  async update(tableName, id, payload) {
    const [filter] = await this.retrieve(tableName, { id });
    const db = await this.database;
    return db.put(tableName, { ...filter, ...payload });
  }

  /**
   * 删除表内容
   *
   * @param {String} tableName 表名
   * @param {Number} id 条目 ID
   * @returns {Promise}
   */
  async delete(tableName, id) {
    const db = await this.database;
    return db.delete(tableName, id);
  }
}
