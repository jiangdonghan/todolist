import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes'
const defaultState = {
  inputValue: '',
  list: []
}
//reducer可以接受state， 但是绝不能修改state
//reducer必须是纯函数，没有任何的副作用
//核心api  createStore store.dispatch store.getState store.subscribe
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
  if (action.type === INIT_LIST_ACTION){
    const newState = JSON.parse(JSON.stringify(state));
    const data = action.data.data.projects
    for(let i = 0;i<data.length;i++){
      newState.list.push(data[i]['address'])
    }
    
    return newState
  }
  return state;
}