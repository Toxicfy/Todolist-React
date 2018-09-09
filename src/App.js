import React, { Component } from "react";
import { message } from "antd";
import axios from "axios";
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction
} from "./store/actionCreator";
import TodoListUI from "./ToDoListUI";
import store from "./store";
import "antd/dist/antd.min.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    // get state
    this.state = store.getState();
    // bind this
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    // subscribe change of store
    store.subscribe(this.handleStoreChange);
  }
  // 数据请求
  componentDidMount() {
    axios.get("/list").then(res => {
      console.log(res);
    });
  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        deleteItem={this.deleteItem}
      />
    );
  }
  // 订阅
  handleStoreChange() {
    this.setState(store.getState());
  }
  // 修改输入框
  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }
  //提交
  handleBtnClick() {
    if (!this.state.inputValue) {
      message.info("请输入内容后提交", 1);
      return;
    }
    const action = getAddItemAction();
    store.dispatch(action);
  }
  deleteItem(index) {
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }
}

export default App;
