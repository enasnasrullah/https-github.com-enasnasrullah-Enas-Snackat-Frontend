import { put, call, takeEvery } from "redux-saga/effects";

import * as apis from "../../Network/Api";
import {
getProductsResponse
} from "./Actions";
import * as Types from "./Types";


export function* getProductsSaga({ payload }) {
  try {
    const response = yield call(apis.getProductst, payload);
    yield put(
      getProductsResponse({
        list: response.data,
      
      })
    );
  } catch (err) {
    console.log(err);
  }
}

export default function* WholesalersSagas() {
  yield takeEvery(
  Types.GET_ALL_PRODUCTS_REQUEST,
  getProductsSaga
  );
  }
