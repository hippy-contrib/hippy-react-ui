export var stopPropagation = function stopPropagation(event) {
  event && event.preventDefault && event.preventDefault();
  event && event.stopPropagation && event.stopPropagation();
  return true;
};