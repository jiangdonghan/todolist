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