---
title: '如何调试项目中Ant Design 源码'
date: '2022-10-26'
slug: 'debug-antd-locally'
tags: ['antd', 'debug']
---

公司CMS是React项目，用到了Antd组件库。业务开发时，看Antd文档熟悉组件参数就足够了。但也有特殊情况，需要了解组件的实现，深入到Antd组件的源码层面。
这篇文章就来分享下如在在本地项目里调试Antd的源码。

## 创建项目

使用Vite脚手架创建一个React项目

```bash
pnpm create vite debug-antd-demo --template react-ts
```

创建成功后，根据终端提示，进入到项目里，运行dev server，新开一个浏览器窗口，输入dev server的访问地址。然后在项目安装Antd组件库，并在入口组件引入
Antd样式文件和Button组件，代码如下：

```jsx
import {Button} from 'antd';
import 'antd/dist/antd.css';

function App() {
    return (
        <div className="App">
            <Button type="promary">这是一个按钮</Button>
        </div>
    )
}

export default App;
```

此时浏览器页面就能看到引入的Button组件
