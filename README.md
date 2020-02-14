# hippy-react-component

> 基于hippy-react2.0的基础组件

## 基础组件

### router

router直接使用 `react-router`, `react-router-dom`

注意事项：

1. 页面切换没有原生页面切换的效果
2. hippy原生只支持 `MemoryBrowser`，在hippy和hippy-web中需要做兼容
3. `Link`组件需要添加 `component`属性，原先 `Link` 组件使用的是 `a` 标签，而在hippy中无法解析

```javascript
import { View } from '@hippy/react';
import { Link } from 'react-router-dom';

<Link component={View} to={'/'}>跳转</Link>
```