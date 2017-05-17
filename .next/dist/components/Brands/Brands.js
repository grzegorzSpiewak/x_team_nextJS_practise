'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/grzegorz/Desktop/x_team_nextJS_practise/components/Brands/Brands.js';


var renderItems = function renderItems(items) {
  return items.map(function (item) {
    return _react2.default.createElement('li', { className: 'brands__logo brands__logo--' + item.name, key: item.name, __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    }, _react2.default.createElement('img', { className: 'brands__logo__image', src: 'static/images/brands/' + item.logo, alt: item.alt, __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    }));
  });
};

var Brands = function Brands(props) {
  return _react2.default.createElement('section', { className: (0, _classnames2.default)('brands', { 'brands--hero': props.text.onHero }), __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement('div', { className: 'wrap', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement('h2', { className: (0, _classnames2.default)('brands__title', { 'brands__title--hidden': props.text.noTitle }) || (0, _classnames2.default)('', { 'brands__title--gray': props.text.gray }), __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, props.text.title), _react2.default.createElement('ul', { className: 'brands__logos', __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, renderItems(props.img))));
};

exports.default = Brands;