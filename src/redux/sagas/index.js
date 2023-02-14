import { all } from 'redux-saga/effects'
import getStockApi from './saga'

export default function* rootSaga() {
  yield all([
    getStockApi(),
  ])
}