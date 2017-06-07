'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * 后台首页 action
   * @return {Promise} []
   */
  async indexAction(){
    return this.display();
  }

}