import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { Provider } from 'react-redux'
import store from './store';
const App = (
  //provider和store做了关联 内部组件都能获取到store
  <Provider store = {store}>
    <TodoList/>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'));


