import { createStore } from 'redux'
import reducer from '../store/reducer'
//reducer传给store
const store = createStore(reducer);

export default store
