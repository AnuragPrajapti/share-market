import { call, put, takeEvery } from 'redux-saga/effects'
import { BASE_URL } from '../api/apiService';

const getApi = async() => {
   try{
        const response = await BASE_URL.get('/productDetails')
        return response.data
     } catch (error) {
        return  error.message
     }
}

function* fetchUsers() {
   try {
      const users = yield call(getApi);
      yield put({type: 'SUCCESS', payload : users});
   } catch (e) {
      yield put({type: 'ERROR', message: e.message});
   }
}

function* getStockApi() {
   yield takeEvery('GET_STOCK', fetchUsers);
}

export default getStockApi;