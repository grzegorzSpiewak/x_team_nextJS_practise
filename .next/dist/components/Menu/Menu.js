'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _Logo = require('../Common/Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _Button = require('../Common/Button');

var _Button2 = _interopRequireDefault(_Button);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/grzegorz/Desktop/x_team_nextJS_practise/components/Menu/Menu.js';


var buttonProps = {
  href: '/hire-developers',
  anchor: 'Hire X-Team',
  title: 'Hire X-Team',
  big: false,
  style: ''
};

var renderItems = function renderItems(items) {
  return items.map(function (item) {
    return _react2.default.createElement(_link2.default, {
      href: '' + item.href,
      key: '' + item.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    }, _react2.default.createElement('li', {
      className: 'menu__item',
      role: 'menuitem',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }, _react2.default.createElement('a', {
      href: '' + item.href,
      title: '' + item.title,
      className: (0, _classnames2.default)('menu__link', { 'menu__link--current': item.currentPage }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      }
    }, item.anchor)));
  });
};

var Menu = function Menu(props) {
  return _react2.default.createElement('header', { className: 'menu', __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, _react2.default.createElement('div', { className: 'wrap', __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, _react2.default.createElement('a', { href: '/', className: 'menu__logo', __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, _react2.default.createElement(_Logo2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  })), _react2.default.createElement('button', { className: 'menu__toggle', __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, _react2.default.createElement('span', { className: 'menu__toggle__line', __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, 'menu')), _react2.default.createElement('nav', { className: 'menu__menubar', __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, _react2.default.createElement('ul', { role: 'menubar', className: 'menu__list', __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, renderItems(props.Items), _react2.default.createElement('li', { className: 'menu__item', __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, (0, _Button2.default)(buttonProps))))));
};

exports.default = Menu;