import React, {Component} from "react";
class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }
  //子组件修改父组件的内容
  //先在父组件绑定
  handleClick () {
    const { deleteItem, index } = this.props;
    deleteItem(index)
  }
  render() {
    const {content} = this.props
  return <div onClick={this.handleClick}>{content}</div>
  }
}
export default TodoItem