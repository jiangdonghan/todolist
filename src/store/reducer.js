import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes'
const defaultState = {
  inputValue: '',
  list: []
}
//reducer可以接受state， 但是绝不能修改state
export default (state = defaultState, action) => {
  //state 整个store仓库里存储的数据
  if (action.type === CHANGE_INPUT_VALUE){
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value; 
    return newState
  }
  if (action.type === ADD_TODO_ITEM){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue); 
    newState.inputValue = ''
    return newState
  }
  if (action.type === DELETE_TODO_ITEM){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index,1)
    return newState
  }
  return state;
}