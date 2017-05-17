'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Brands = require('../Brands/Brands');

var _Brands2 = _interopRequireDefault(_Brands);

var _BrandsData = require('../../data/BrandsData');

var _BrandsData2 = _interopRequireDefault(_BrandsData);

var _Button = require('../Common/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/grzegorz/Desktop/x_team_nextJS_practise/components/Herobrands/Herobrands.js';


var renderCTA = function renderCTA(buttons) {
  return buttons.map(function (button) {
    return (0, _Button2.default)({
      href: button.href,
      anchor: button.anchor,
      title: button.title,
      style: button.style,
      big: button.big,
      overlay: button.overlay,
      key: button.title
    });
  });
};

var Herobrands = function Herobrands(props) {
  return _react2.default.createElement('section', { className: 'hero-section hero-section--' + props.layout + ' hero-section--' + props.style, __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, _react2.default.createElement('div', { className: 'hero-section__wrap hero-section__wrap--' + props.layout, __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, _react2.default.createElement('h1', { className: 'hero-section__title hero-section__title--' + props.layout, dangerouslySetInnerHTML: { __html: props.title }, __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }), _react2.default.createElement('div', { className: 'hero-section__action hero-section__action--' + props.layout, __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, _react2.default.createElement('p', { className: 'hero-section__caption hero-section__caption--' + props.layout, __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, props.caption), renderCTA(props.buttons))), _react2.default.createElement(_Brands2.default, (0, _extends3.default)({}, _BrandsData2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  })));
};

exports.default = Herobrands;