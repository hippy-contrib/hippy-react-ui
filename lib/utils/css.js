"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setStyle = setStyle;
exports.removeStyle = removeStyle;

var _ = require(".");

/**
 * web动态加载css
 * 
 * 1. 兼容palceholder样式
 */
function setStyle(id, style) {
  if (!_.ISWEB) return;
  var css = Object.keys(style).map(function (key) {
    return "".concat(key, "{ ").concat(style[key], " }");
  }).join(' '); // 查询当前页面是否有该样式，如果有，直接修改内容，如果没有则创建新的

  var styleElementId = id;
  var styleEle = document.getElementById(styleElementId);

  if (!styleEle) {
    styleEle = document.createElement('style');
    document.head.appendChild(styleEle);
    styleEle.id = id;
  }

  if (styleEle.styleSheet) {
    // This is required for IE8 and below.
    styleEle.styleSheet.cssText = '';
    styleEle.styleSheet.cssText = css;
  } else {
    styleEle.innerHTML = '';
    styleEle.appendChild(document.createTextNode(css));
  }
}

function removeStyle(styleId) {
  if (!_.ISWEB) return;
  var ele = document.getElementById(styleId);
  ele && ele.remove();
}