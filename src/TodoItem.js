import React, {Component} from "react";
import PropTypes from 'prop-types'
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
    const {test, content} = this.props
    return (<div onClick={this.handleClick}>
    {test}-{content}
    </div>)
  }
}
//大小写 
//限定父组件 给子组件传值的type
TodoItem.propTypes = {
  //isrequired会警告 即便test不存在
  test: PropTypes.string,
  content: PropTypes.string,//PropTypes.Arrayof(..,..) 意思是content必须是数组 数组里的type可以是。。。。 oneOfType([..,..])
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

TodoItem.defauleProps = {
  test: 'hello world'
}
export default TodoItem