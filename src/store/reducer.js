const defaultState = {
  inputValue: '',
  list: []
}
//reducer可以接受state， 但是绝不能修改state
export default (state = defaultState, action) => {
  //state 整个store仓库里存储的数据
  if (action.type === 'change_input_value'){
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value; 
    return newState
  }
  if (action.type === 'add_todo_item'){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue); 
    newState.inputValue = ''
    return newState
  }
  if (action.type === 'delete_todo_item'){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index,1)
    return newState
  }
  return state;
}