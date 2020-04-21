import React, {Component} from "react";
import store from './store/index.js';
import { connect } from 'react-redux'
// import axios from 'axios'
// import {getInputChangeAction, getHandleBtnClickAction,gethandleItemDeleteAction, getInitList} from './store/actionCreators'
import 'antd/dist/antd.css';
import { Input,Button,List } from 'antd';
//拆分出actiontype 避免bug
//关注整个组建的业务逻辑 容器组件
class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    // this.handleStoreChange = this.handleStoreChange.bind(this)
    // this.handleBtnClick = this.handleBtnClick.bind(this)
    // this.handleItemDelete = this.handleItemDelete.bind(this)
    store.subscribe(this.handleStoreChange)
  }
  render() {
    return (
      <div style={{marginTop: 10,width: 600,marginLeft: 'auto',marginRight: 'auto'}}>
      <div>
      <Input value={this.state.inputValue} 
      placeholder='todo info' 
      style={{width: '85%',marginRight:10}}
      onChange={this.props.handleInputChange}
      />
      <Button type="primary" onClick={this.props.handleBtnClick} style={{float:"right"}}>提交</Button>
      </div>
      <List
        style={{marginTop: '10px',width: '85%'}}
        bordered
        dataSource={this.props.list}
        renderItem={(item, index) => (<List.Item onClick={() => {this.props.handleItemDelete(index)}}>{item}</List.Item>)}
      />
      </div>
    )
  }
  handleInputChange(e){
    console.log(e.target.value)
  }

}
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue
  }
}
//todolist 和store做连接
export default connect(mapStateToProps,null)(TodoList);