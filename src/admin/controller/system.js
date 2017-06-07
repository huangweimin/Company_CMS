'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * 后台 → 系统设置 action
   * @return {Promise} []
   */
  async indexAction() {
    return this.display();
  }

}