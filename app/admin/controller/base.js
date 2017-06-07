'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_think$controller$bas) {
    (0, _inherits3.default)(_class, _think$controller$bas);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, _think$controller$bas.apply(this, arguments));
    }

    //获取全部列表
    _class.prototype.getArticleList = function getArticleList() {
        return this.model('article').select();
    };

    //获取某类列表


    _class.prototype.getSingleArticle = function getSingleArticle(where) {
        return this.model('article').where(where).select();
    };

    //获取文章详情


    _class.prototype.getArticleDetail = function getArticleDetail(where) {
        return this.model('article').where(where).find();
    };

    return _class;
}(think.controller.base);

exports.default = _class;
//# sourceMappingURL=base.js.map