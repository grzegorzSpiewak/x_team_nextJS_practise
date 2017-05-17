
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/grzegorz/Desktop/x_team_nextJS_practise/components/Common/Button.js';


var Button = function Button(props) {
  var classNames = (0, _classnames2.default)('btn', {
    'btn--big': props.big
  });
  var mediabox = (0, _classnames2.default)({
    'mediabox': props.overlay
  });
  return _react2.default.createElement(_link2.default, { href: '' + props.href, key: props.title, __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement('a', { href: props.href, title: props.title, target: '_blank', className: classNames + ' ' + mediabox + ' btn--' + props.style, __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, props.anchor));
};

exports.default = Button;