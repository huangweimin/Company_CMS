'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * 后台 → 单页面管理 action
   * @return {Promise} []
   */
  async indexAction() {
    return this.display();
  }

}