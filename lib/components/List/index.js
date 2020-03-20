import _objectSpread from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/objectSpread2";
import _classCallCheck from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/inherits";
import React from "react";
import { ListView, View, StyleSheet, Dimensions, Platform } from "@hippy/react";
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
var styles = StyleSheet.create({
  container: {},
  listItem: {
    height: 56,
    paddingLeft: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee'
  }
}); // class Entry extends React.Component<Object, InitialState> {

var Entry =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Entry, _React$Component);

  function Entry(props) {
    var _this;

    _classCallCheck(this, Entry);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Entry).call(this, props));
    _this.state = {
      route: 'home',
      offsetTop: 0,
      cacheNodeList: []
    };

    _this.setRef = function (index, element) {
      _this.listItem = _this.listItem || [];
      _this.listItem[index] = ReactDOM.findDOMNode(element);
    };

    _this.listRef = React.createRef();
    _this.toggleItem = _this.toggleItem.bind(_assertThisInitialized(_this));
    _this.throttle = _this.throttle.bind(_assertThisInitialized(_this));
    _this.getRenderRow = _this.getRenderRow.bind(_assertThisInitialized(_this));
    _this.setRef = _this.setRef.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Entry, [{
    key: "getRenderRow",
    value: function getRenderRow(index) {
      if (index < 0 || index >= this.props.numberOfRows) return null;
      this.state.cacheNodeList[index] = this.state.cacheNodeList[index] || {};
      return this.state.cacheNodeList[index].hide ? null : React.createElement(View, {
        ref: this.setRef.bind(this, index)
      }, this.props.renderRow(index));
    }
  }, {
    key: "render",
    value: function render() {
      var props = _objectSpread({}, this.props, {
        renderRow: this.getRenderRow
      });

      return React.createElement(ListView, Object.assign({
        ref: this.listRef
      }, props, {
        style: [styles.container, {
          paddingTop: this.state.offsetTop
        }]
      }));
    }
  }, {
    key: "initNodeCache",
    value: function initNodeCache() {
      var cacheNodeList = [];
      this.listItem.forEach(function (item, index) {
        var node = item.parentNode;
        var cacheNode = {};
        cacheNode.clientHeight = cacheNode.clientHeight || node.clientHeight;
        cacheNode.offsetTop = cacheNode.offsetTop || node.offsetTop;
        cacheNode.node = item;
        cacheNodeList[index] = cacheNode;
      });
      this.setState({
        cacheNodeList: cacheNodeList
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (Platform.OS === 'web') {
        this.initNodeCache();
        setTimeout(this.toggleItem, 0);
        this.scrollCb = this.throttle(this.toggleItem, 100);
        window.addEventListener('scroll', this.scrollCb);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (Platform.OS === 'web') {
        window.removeEventListener('scroll', this.scrollCb);
      }
    }
  }, {
    key: "toggleItem",
    value: function toggleItem() {
      console.log('toggleitem', this.state.cacheNodeList);

      if (Platform.OS === 'web') {
        var _Dimensions$get = Dimensions.get('window'),
            height = _Dimensions$get.height;

        var cacheNodeList = this.state.cacheNodeList;
        var dataSource = this.state.cacheNodeList;
        var offsetTop = 0;
        var scrollTop = document.documentElement.scrollTop;
        dataSource.forEach(function (item, index) {
          var top = cacheNodeList[index].offsetTop - scrollTop;
          var isHide = top <= -height || top >= 2 * height;
          var isTopHide = top <= -height;
          console.log(index, isHide, top, height, cacheNodeList[index].offsetTop, scrollTop, isTopHide, offsetTop);
          dataSource[index].hide = isHide;
          offsetTop = offsetTop + (isTopHide ? cacheNodeList[index].clientHeight : 0);
        });
        this.setState({
          dataSource: dataSource,
          offsetTop: offsetTop
        });
      }
    }
  }, {
    key: "throttle",
    value: function throttle(cb, time) {
      var _lastTime = null;
      return function () {
        var _nowTime = +new Date();

        if (_nowTime - _lastTime > time || !_lastTime) {
          cb();
          _lastTime = _nowTime;
        }
      };
    }
  }]);

  return Entry;
}(React.Component);

export default withRouter(Entry);