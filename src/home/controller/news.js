'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * 新闻列表 action
   * @return {Promise} []
   */
  async indexAction() {
    let data = await this.getSingleArticle({
      catalogId: 2
    });
    this.assign({
      list: data
    })
    return this.display();
  }

  /**
   * 新闻详细 action
   * @return {Promise} []
   */
  async detailAction() {
    var id = this.get("id");
    if (!id) {
      return think.statusAction(404, this.http);
    } else {
      let data = await this.getArticleDetail({
        id: id
      });
      this.assign({
        data: data
      })
      return this.display();
    }
  }

}