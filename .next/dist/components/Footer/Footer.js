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

var _FooterData = require('../../data/FooterData');

var _FooterData2 = _interopRequireDefault(_FooterData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/grzegorz/Desktop/x_team_nextJS_practise/components/Footer/Footer.js';


var renderItems = function renderItems(items) {
  return items.map(function (item) {
    return _react2.default.createElement(_link2.default, { href: '' + item.href, key: '' + item.title, __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    }, _react2.default.createElement('li', { className: 'footer__item ' + (item.mobile ? 'footer__item--mobile' : ''), __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }, _react2.default.createElement('a', { className: 'footer__link', href: '' + item.href, __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }, ' ', item.title, ' ')));
  });
};

var renderColumn = function renderColumn(items) {
  return _react2.default.createElement('div', { className: 'footer__column', __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement('h4', { className: 'footer__title', __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, items.title), _react2.default.createElement('ul', { className: 'footer__list', __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, renderItems(items.links)));
};

var Footer = function Footer(props) {
  return _react2.default.createElement('footer', { className: 'footer', __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, _react2.default.createElement('section', { className: 'footer__links block', __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, _react2.default.createElement('div', { className: 'wrap', __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, renderColumn(props.Company), renderColumn(props.Resources), renderColumn(props.Hire), renderColumn(props.Connect))), _react2.default.createElement('div', { className: 'footer__colophon', __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, _react2.default.createElement('div', { className: 'wrap', __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, _react2.default.createElement('div', { className: 'footer__colophon__logo', __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, _react2.default.createElement(_Logo2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  })), _react2.default.createElement('address', { className: 'footer__colophon__address', __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, _react2.default.createElement('script', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, 'document.write(new Date().getFullYear())'), '\xA9 All rights reserved. X-Company Pty Ltd.'))));
};

exports.default = Footer;