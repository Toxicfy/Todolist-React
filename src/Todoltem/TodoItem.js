import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Icon, Checkbox} from 'antd';
import './TodoItem.css'

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const {content} = this.props;
    return (
      <div className='list-item'>
        <li>
          <Checkbox/>
          <span>{content}</span>
          <Icon type="delete"
                className='removeIcon'
                style={{fontSize: 20, color: '#08c'}}
                onClick={this.handleClick}/>
        </li>
      </div>
    );
  }

  //避免多次渲染，因为super组件渲染它的子组件一定会被触发render()
  shouldComponentUpdate(nextProps){
    return nextProps.content !== this.props.content;
  }

  handleClick() {
    const {index, deleteItem} = this.props;
    deleteItem(index);
  };
}

//数据校验规则
TodoItem.propTypes = {
  content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  index: PropTypes.number,
  deleteItem: PropTypes.func.isRequired,//表明必须传递给组件
};

TodoItem.defaultProps = {
  //当父组件没有传递 content 的时候默认的值
  content: 'test demo',
};

export default TodoItem;