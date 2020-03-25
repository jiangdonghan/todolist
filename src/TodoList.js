import React, {Component, Fragment} from "react";
import TodoItem from "./TodoItem";
import './style.css';
// react 16 provides Fragment to replace outside div
class TodoList extends Component {
  constructor(props){
    //super调用父类的构造函数
    super(props);
    //当组件的state或者props发生改变的时候，render函数会重新执行
    //父组件的render被执行时，子组件render也会重新执行一次
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }
  handleInputChange (e) {
    const value = e.target.value
    this.setState(() => ({
      inputValue: value
    }))
    // this.setState({
    //   inputValue: e.target.value
    // })
  }
  handleButtonClick () {
    //prevState等同于this.state
    this.setState((prevState) => ({
      list:[...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
    // this.setState({
    //   list:[...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // })
  }
  handleItemDelete (index) {
    //immutable
    //states are not allowed to be changed
    
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index,1)
      return {list}
    })
    // this.setState({
    //   list: list  //or just list
    // })
  }
  getTodoItem () {
    return this.state.list.map((item,index)=>{
      return (
        <div  key={index}>
         <TodoItem content={item} index={index}
         deleteItem={this.handleItemDelete}/>
          {/*
          <li key={index} 
          onClick={this.handleItemDelete.bind(this, index)}>{item}</li>
          */}
        </div>
        )
      })
    
  }
  render() {
    return (
      <Fragment>
        {//fragment is also a comoponet
        }
        <div>
        <label htmlFor="insertArea">Tasks</label>
        <input id="insertArea" className = "input"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        /><button onClick={this.handleButtonClick}>submit</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }
}

export default TodoList;