"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stopPropagation = void 0;

var stopPropagation = function stopPropagation(event) {
  event && event.preventDefault && event.preventDefault();
  event && event.stopPropagation && event.stopPropagation();
  return true;
};

exports.stopPropagation = stopPropagation;