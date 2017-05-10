'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/grzegorz/Desktop/x_team_nextJS_practise/components/Common/Button.js';


var Button = function Button(props) {
  var classNames = (0, _classnames2.default)('btn', {
    'btn--big': props.big
  });
  var mediabox = (0, _classnames2.default)({
    'mediabox': props.overlay
  });
  var setTarget = (0, _classnames2.default)({
    'target="_blank"': props.newTab
  });
  return _react2.default.createElement('a', { href: props.href, title: props.title, className: classNames, __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, props.anchor);
};

exports.default = Button;