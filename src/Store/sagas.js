import { all } from "redux-saga/effects";
import productsSaga from "../Store/Products/Sagas"


export default function* rootSaga() {
  yield all([
    productsSaga()
  ]);
}
