'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _Menu = require('../components/Menu/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _Footer = require('../components/Footer/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Homepage = require('../data/Homepage');

var _Homepage2 = _interopRequireDefault(_Homepage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/grzegorz/Desktop/x_team_nextJS_practise/templates/Layout.js';


var Layout = function Layout(_ref, props) {
  var children = _ref.children;
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, 'X-Team'), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/css/hero.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  })), _react2.default.createElement(_Menu2.default, (0, _extends3.default)({}, _Homepage2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  })), children, _react2.default.createElement(_Footer2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }));
};

exports.default = Layout;