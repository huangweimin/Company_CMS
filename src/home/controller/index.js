'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * 首页 action
   * @return {Promise} []
   */
  async indexAction() {
    let data = await this.getArticleList();
    this.assign({
      list: data
    })
    return this.display();
  }

}