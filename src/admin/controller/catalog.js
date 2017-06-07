'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * 后台 → 文章分类 action
   * @return {Promise} []
   */
  async indexAction() {
    return this.display();
  }

  /**
   * 后台 → 添加目录 action
   * @return {Promise} []
   */
  async addAction() {
    return this.display();
  }

  /**
   * 后台 → 编辑目录 action
   * @return {Promise} []
   */
  async editAction() {
    return this.display();
  }

}