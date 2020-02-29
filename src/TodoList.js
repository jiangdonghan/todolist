import React, {Component, Fragment} from "react";
import './style.css';
import TodoItem from "./TodoItem";
// react 16 provides Fragment to replace outside div
class TodoList extends Component {
  constructor(props){
    //super调用父类的构造函数
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }
  handleInputChange (e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  handleButtonClick () {
    this.setState({
      list:[...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  handleItemDelete (index) {
    //immutable
    //states are not allowed to be changed
    const list = [...this.state.list]
    list.splice(index,1)
    this.setState({
      list: list  //or just list
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
          {
            this.state.list.map((item,index)=>{
            return (
              <div>
               <TodoItem content={item}/>
                {/*
                <li key={index} 
                onClick={this.handleItemDelete.bind(this, index)}>{item}</li>
                */}
              </div>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }
}

export default TodoList;