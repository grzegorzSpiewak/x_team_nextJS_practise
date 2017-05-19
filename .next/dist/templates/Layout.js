'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Menu = require('../components/Menu/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _Footer = require('../components/Footer/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Homepage = require('../data/Homepage');

var _Homepage2 = _interopRequireDefault(_Homepage);

var _FooterData = require('../data/FooterData');

var _FooterData2 = _interopRequireDefault(_FooterData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/grzegorz/Desktop/x_team_nextJS_practise/templates/Layout.js';


var Layout = function Layout(_ref) {
  var children = _ref.children;
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_Menu2.default, (0, _extends3.default)({}, _Homepage2.default.Menu, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  })), children, _react2.default.createElement(_Footer2.default, (0, _extends3.default)({}, _FooterData2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  })));
};

exports.default = Layout;