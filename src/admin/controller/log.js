'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * 后台 → 操作记录 action
   * @return {Promise} []
   */
  async indexAction() {
    return this.display();
  }

}