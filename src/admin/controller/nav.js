'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * 后台 → 自定义导航栏 action
   * @return {Promise} []
   */
  async indexAction() {
    return this.display();
  }

}