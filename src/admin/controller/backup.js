'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * 后台 → 数据备份 action
   * @return {Promise} []
   */
  async indexAction() {
    return this.display();
  }

}