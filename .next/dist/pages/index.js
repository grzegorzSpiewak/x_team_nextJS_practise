'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../templates/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Herobrands = require('../components/Herobrands/Herobrands');

var _Herobrands2 = _interopRequireDefault(_Herobrands);

var _Homepage = require('../data/Homepage');

var _Homepage2 = _interopRequireDefault(_Homepage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/grzegorz/Desktop/x_team_nextJS_practise/pages/index.js?entry';

exports.default = function () {
  return _react2.default.createElement(_Layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_Herobrands2.default, { data: _Homepage2.default.Hero, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }));
};