//整个文件的运行入口
import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList/TodoList';

//通过ReactDOM的方法将组件挂在到id = root的内容中
ReactDOM.render(<TodoList />, document.getElementById('root'));


//对于一个组件而言的通常是按照一个大写的组件名，在外面套上尖括号即可