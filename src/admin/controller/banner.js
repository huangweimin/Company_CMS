'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * 后台 → 首页幻灯广告 action
   * @return {Promise} []
   */
  async indexAction() {
    return this.display();
  }

}