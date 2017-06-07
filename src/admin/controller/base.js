'use strict';

export default class extends think.controller.base {

    //获取全部列表
    getArticleList() {
        return this.model('article').select();
    }

    //获取某类列表
    getSingleArticle(where) {
        return this.model('article').where(where).select();
    }

    //获取文章详情
    getArticleDetail(where) {
        return this.model('article').where(where).find();
    }

}