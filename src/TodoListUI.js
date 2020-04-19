import React from 'react'
import 'antd/dist/antd.css';
import { Input,Button,List } from 'antd';

//无状态组件 性能比较高
//UI 组件一般可以用无状态组件
const TodoListUI = (props) => {
  return (
    <div style={{marginTop: 10,marginLeft:10}}>
    <div>
      <Input value={props.inputValue} 
      placeholder='todo info' 
      style={{width: 300,marginRight:10}}
      onChange={props.handleInputChange}
      />
      <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
    </div>
    <List
      style={{marginTop: '10px',width: '300px'}}
      bordered
      dataSource={props.list}
      renderItem={(item, index) => (<List.Item onClick={() => {props.handleItemDelete(index)}}>{item}</List.Item>)}
    />
  </div>
  )
}
// class TodoListUI extends Component {
//   render() {
//     return (

//     )
    
//   }
// }
export default TodoListUI