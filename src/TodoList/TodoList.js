import React, {Component} from 'react';
import TodoItem from '../Todoltem/TodoItem';
import axios from "axios";
import {Input, Button} from 'antd';
import './style.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: [],
    };
    //  方法this的绑定
    this.handelInputChange = this.handelInputChange.bind(this);
    this.handelBtnClick = this.handelBtnClick.bind(this);
    this.handelItemDelete = this.handelItemDelete.bind(this);
  }

  //模拟数据
  componentDidMount() {
    axios.get('./api/todoList')
      .then((res) => {
        this.setState(() => ({
          list: [...res.data]
        }));
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className='container'>
        <div className='input-container'>
          <label htmlFor="insertArea">待办事项</label>
          <Input id='insertArea'
                 className="insertArea"
                 type="text"
                 value={this.state.inputValue}
                 onChange={this.handelInputChange}
          />
          <Button type="danger" onClick={this.handelBtnClick}>提交</Button>
        </div>
        <div className='list-container'>
          {this.getTodoItem()}
        </div>
      </div>
    )
  }

  //获取列表项
  getTodoItem() {
    return this.state.list.map((item, index) => {
      return <TodoItem
        key={item}
        content={item}
        index={index}
        deleteItem={this.handelItemDelete}
      />;
    })
  }

  //设置input的值
  handelInputChange(e) {
    //将需要设置给dom的值进行保存，保证异步渲染的时候获得正确的值
    const value = e.target.value;
    this.setState(() => ({
      inputValue: value
    }))
  }

  //提交input中值
  handelBtnClick() {
    if (!this.state.inputValue) {
      alert("提交内容不能为空");
      return;
    }
    //这里的prevState是改变前的数据，也就是this.state;
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }

  //删除list item
  handelItemDelete(index) {
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return {list: list}
    })
  };

}

export default TodoList;