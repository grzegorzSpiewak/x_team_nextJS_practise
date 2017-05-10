'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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
      lineNumber: 8
    }
  }, _react2.default.createElement(_Menu2.default, { data: _Homepage2.default.Menu.Items, __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), children, _react2.default.createElement(_Footer2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }));
};

exports.default = Layout;