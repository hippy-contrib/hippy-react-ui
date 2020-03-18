/**
 * web动态加载css
 * 
 * 1. 兼容palceholder样式
 */
import { ISWEB } from '.';
export function setStyle(id, style) {
  if (!ISWEB) return;
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
export function removeStyle(styleId) {
  if (!ISWEB) return;
  var ele = document.getElementById(styleId);
  ele && ele.remove();
}