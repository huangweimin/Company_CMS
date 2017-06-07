'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * 后台 → 网站管理员 action
   * @return {Promise} []
   */
  async indexAction() {
    return this.display();
  }

}