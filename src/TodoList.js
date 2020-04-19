import React, {Component} from "react";
import store from './store/index.js';
import {getInputChangeAction, getHandleBtnClickAction,gethandleItemDeleteAction, getTodoList} from './store/actionCreators'
import TodoListUI from './TodoListUI'
//拆分出actiontype 避免bug
//关注整个组建的业务逻辑 容器组件
class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    store.subscribe(this.handleStoreChange)
  }
  render() {
    return <TodoListUI inputValue = {this.state.inputValue}
    list = {this.state.list}
    handleInputChange = {this.handleInputChange}
    handleBtnClick = {this.handleBtnClick}
    handleItemDelete = {this.handleItemDelete}
    />
  }
  //最好拆分异步函数
  componentDidMount() {
    // axios.get('https://www.easy-mock.com/mock/5e7f7d5b7b3f3a3656470e38/example/api/json').then((res)=>{
    //   const data = res.data
    //   const action = initListAction(data)
    //   store.dispatch(action)
    // })
    const action = getTodoList();
    store.dispatch(action)
  }
  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  handleStoreChange(){
    this.setState(store.getState())
  }
  handleBtnClick(){
    const action = getHandleBtnClickAction()
    store.dispatch(action)
  }
  handleItemDelete(index){
    const action = gethandleItemDeleteAction(index)
    store.dispatch(action)
  }
}

export default TodoList;