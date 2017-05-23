'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Head = require('../components/Head/Head');

var _Head2 = _interopRequireDefault(_Head);

var _Layout = require('../templates/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Herobrands = require('../components/Herobrands/Herobrands');

var _Herobrands2 = _interopRequireDefault(_Herobrands);

var _Video = require('../components/Video/Video');

var _Video2 = _interopRequireDefault(_Video);

var _Cavalry = require('../components/Cavalry/Cavalry');

var _Cavalry2 = _interopRequireDefault(_Cavalry);

var _VideoFilter = require('../components/VideoFilter/VideoFilter');

var _VideoFilter2 = _interopRequireDefault(_VideoFilter);

var _VideoQuote = require('../components/VideoQuote/VideoQuote');

var _VideoQuote2 = _interopRequireDefault(_VideoQuote);

var _CheckList = require('../components/CheckList/CheckList');

var _CheckList2 = _interopRequireDefault(_CheckList);

var _SectionCutout = require('../components/SectionCutout/SectionCutout');

var _SectionCutout2 = _interopRequireDefault(_SectionCutout);

var _Quotes = require('../components/Quotes/Quotes');

var _Quotes2 = _interopRequireDefault(_Quotes);

var _Skills = require('../components/Skills/Skills');

var _Skills2 = _interopRequireDefault(_Skills);

var _Hire = require('../components/Hire/Hire');

var _Hire2 = _interopRequireDefault(_Hire);

var _Homepage = require('../data/Homepage');

var _Homepage2 = _interopRequireDefault(_Homepage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/grzegorz/Desktop/x_team_nextJS_practise/pages/index.js?entry';
/**
 * Components
 */

/**
 * Content
 */


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement(_Head2.default, (0, _extends3.default)({}, _Homepage2.default.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      })), _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement(_Herobrands2.default, (0, _extends3.default)({}, _Homepage2.default.Hero, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      })), _react2.default.createElement(_Video2.default, (0, _extends3.default)({}, _Homepage2.default.Video, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      })), _react2.default.createElement(_Cavalry2.default, (0, _extends3.default)({}, _Homepage2.default.Cavalry, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      })), _react2.default.createElement(_VideoFilter2.default, (0, _extends3.default)({}, _Homepage2.default.VideoFilter, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      })), _react2.default.createElement(_CheckList2.default, (0, _extends3.default)({}, _Homepage2.default.CheckList, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      })), _react2.default.createElement(_SectionCutout2.default, (0, _extends3.default)({}, _Homepage2.default.Hire10Years, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      })), _react2.default.createElement(_SectionCutout2.default, (0, _extends3.default)({}, _Homepage2.default.NeverStop, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      })), _react2.default.createElement(_SectionCutout2.default, (0, _extends3.default)({}, _Homepage2.default.Ordinary, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      })), _react2.default.createElement(_Quotes2.default, (0, _extends3.default)({}, _Homepage2.default.Quotes, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      })), _react2.default.createElement(_Skills2.default, (0, _extends3.default)({}, _Homepage2.default.Skills, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      })), _react2.default.createElement(_Hire2.default, (0, _extends3.default)({}, _Homepage2.default.Hire, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }))));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;