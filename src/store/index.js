import { createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import TodoSagas from './sagas'
import reducer from './reducer'

const sagaMiddleware = createSagaMiddleware()
//reducer传给store
//中间件就是对dispatch一个省级，在action和reducer中
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
const enhancer = composeEnhancers(
  // other store enhancers if any
  applyMiddleware(sagaMiddleware)
);
const store = createStore(
  reducer,
  enhancer
  );
sagaMiddleware.run(TodoSagas)
export default store
