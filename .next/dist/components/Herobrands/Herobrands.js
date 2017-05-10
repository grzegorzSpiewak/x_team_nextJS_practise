'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Brands = require('../Brands/Brands');

var _Brands2 = _interopRequireDefault(_Brands);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/grzegorz/Desktop/x_team_nextJS_practise/components/Herobrands/Herobrands.js';


var Herobrands = function Herobrands(props) {
  return _react2.default.createElement('section', { className: 'hero-section hero-section--{props.layout} hero-section--' + props.data.style, __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('div', { className: 'hero-section__wrap hero-section__wrap--' + props.data.layout, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('h1', { className: 'hero-section__title hero-section__title--' + props.data.layout, dangerouslySetInnerHTML: { __html: props.data.title }, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), _react2.default.createElement('div', { className: 'hero-section__action hero-section__action--' + props.data.layout, __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement('h2', { className: 'hero-section__caption hero-section__caption--' + props.data.layout, __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, props.data.caption))), _react2.default.createElement(_Brands2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }));
};

exports.default = Herobrands;