import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {GET_INIT_LIST} from './actionTypes'
import {initListAction} from './actionCreators'
import axios from 'axios' 
function* getInitList(){
  try {
    const res = yield axios.get('https://www.easy-mock.com/mock/5e7f7d5b7b3f3a3656470e38/example/api/json') 
    const data = res.data
    const action = initListAction(data)
    yield put(action)
  }catch(e){
    console.log('list.json请求失败')
  }

}
//generaor 函数
function* mySaga() {
  //takeevery捕获到
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;