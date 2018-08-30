import React, { Component } from "react";
import { Input, Button, List, message, Icon } from "antd";
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction
} from "./store/actionCreator";
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
  render() {
    return (
      <div className="App">
        <Input
          placeholder="新建事项"
          size="large"
          className="input"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <Button size="large" className="addBtn" onClick={this.handleBtnClick}>
          Add
        </Button>
        <div>
          <List
            size="large"
            className="displayList"
            dataSource={this.state.list}
            bordered
            renderItem={(item, index) => (
              <List.Item>
                {item}
                <Icon
                  type="close"
                  className="closeIcon"
                  style={{ fontSize: 20 }}
                  onClick={this.deleteItem.bind(this, index)}
                />
              </List.Item>
            )}
          />
        </div>
      </div>
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
