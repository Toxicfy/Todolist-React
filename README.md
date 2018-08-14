> todolist- react入门

实现最基本的功能，用于完成`React`语法的入门学习

和 `Vue` 相同的是对于一个功能的完成的核心都是进行拆分后进行组件的封装; 不相同的地方在于`JSX`的语法保证了所有的逻辑都能在`.js`文件中完成；

通过简单的 todolist，使用到的 react的用法；

> 搭建脚手架工具，这个和Vue-cli差距不是很大，对于webpack的配置同样这里不写了，但是这不影响使用这个工程项目；

`cnpm install -g  create-react-app` 安装脚手架

`create-react-app my-app` 创建工程文件

其中`registerServiceWorker`缓存资源到本地，提升应用的访问速度，这个东西先给删除了，保证项目的简单，至于`package.json`作为包管理工具没什么特别的


>  `JSX` 的基础语法

-  遇到 `HTML` 标签（以 `<` 开头），就用 `HTML` 规则解析； 遇到代码块（以 `{`开头），就用 JavaScript 规则解析;
-  `class => className` 、 label中的 `for => htmlFor`等
-  注释的写法在于 `{ }` 里面就可以按照js的注释写即可。
-  和 `Vue`相同的根节点下只能有一个元素;

>  组件的数据/方法

`react`中的数据存在组件`constructor`中的state中进行管理

值得注意的是：

- 在使用中避免直接修改state中的值，而应该使用`this.setState`方法进行修改:
``` JavaScript react
//prevState这里就是指修改前，也就是`this.state`;
this.setState((prevState) => ({
  list: [...prevState.list, prevState.inputValue],
  inputValue: ''
}))
```
- 在使用方法的时候需要绑定`this`，建议在使用前在`constructor`中进行定义

``` JavaScript react
 this.handelInputChange = this.handelInputChange.bind(this);
```

> react 的简单数据传值

父子组件传递，实际上都是依赖于通过使用组件的时候通过属性传递;满足单向数据流，子组件不能修改父组件中的的值；

``` JavaScript
<Component propName = {propContent} propMethodName = {propMethod} />
//在子组件中的使用方法和变量
const { param1 , propName} = this.props,
    param2 = 'other param from child';
propName(param1,param2);
//这样就完成了父子间的通信
```

> 总的来说，Vue在实现上语法确实比 React要简单，数据绑定和改变也有语法糖，写起来更简单那吧，但是React的组件化更加自然吧，写起来也比较舒服。。。
