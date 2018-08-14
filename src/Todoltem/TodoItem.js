import React, { Component } from 'react';
import { Row, Icon, Checkbox, Button } from 'antd';
import './TodoItem.css'

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const { content } = this.props;
    return (
      <div className='list-item'>
        <li>
          <Checkbox  />
          <span>{content}</span>
          <Icon type="delete" 
                className='removeIcon'
                style={{ fontSize: 20, color: '#08c'}}
                onClick={this.handleClick} />
        </li>
      </div>
    );
  }

  handleClick() {
    const { index, deleteItem } = this.props;
    deleteItem(index);
  };
}

export default TodoItem;