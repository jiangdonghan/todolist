import React, {Component, Fragment} from "react";
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
  }
  handleInputChange (e) {
    console.log(e.target.value)
    this.setState({
      inputValue: e.target.value
    })
  }
  render() {
    return (
      <Fragment>
        <div>
        <input 
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        /><button onClick={this.handleButtonClick}>submit</button>
        </div>
        <ul>
          <li>
            learn React
          </li>
          <li>
            learn English
          </li>
        </ul>
      </Fragment>
    )
  }
}

export default TodoList;