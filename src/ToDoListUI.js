import React from "react";
import { Input, Button, List, Icon } from "antd";

const TodoListUI = props => {
  return (
    <div className="App">
      <Input
        placeholder="新建事项"
        size="large"
        className="input"
        value={props.inputValue}
        onChange={props.handleInputChange}
      />
      <Button size="large" className="addBtn" onClick={props.handleBtnClick}>
        Add
      </Button>
      <div>
        <List
          size="large"
          className="displayList"
          dataSource={props.list}
          bordered
          renderItem={(item, index) => (
            <List.Item>
              {item}
              <Icon
                type="close"
                className="closeIcon"
                style={{ fontSize: 20 }}
                onClick={() => {
                  props.deleteItem(index);
                }}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default TodoListUI;
