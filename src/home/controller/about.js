'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * 关于我们 action
   * @return {Promise} []
   */
  async indexAction() {
    let data = await this.getArticleDetail({
      catalogId: 3
    });
    this.assign({
      data: data
    })
    return this.display();
  }

}