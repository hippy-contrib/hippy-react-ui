"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _react = require("@hippy/react");

var styles = _react.StyleSheet.create({
  mask: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    // opacity: 0.2,
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});

exports.styles = styles;