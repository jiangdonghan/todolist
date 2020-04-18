import axios from 'axios'
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM,INIT_LIST_ACTION } from "./actionTypes";
//帮助创建一个action来使用
export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})
export const getHandleBtnClickAction = () => ({
  type: ADD_TODO_ITEM
})
export const gethandleItemDeleteAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})
export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
})
//使用redux thunk可以用函数了
export const getTodoList = () => {
  //能够接收到dispatch
  return (dispatch) => {
    axios.get('https://www.easy-mock.com/mock/5e7f7d5b7b3f3a3656470e38/example/api/json').then((res)=>{
      const data = res.data
      console.log(data)
      const action = initListAction(data)
      dispatch(action)
    })
  }
}