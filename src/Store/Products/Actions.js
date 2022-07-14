import * as types from "./Types";

export const getProductsRequest = (data) => ({
    type: types.GET_ALL_PRODUCTS_REQUEST,
    payload: data
  });
  
  
export const getProductsResponse = (data) => ({
    type: types.GET_ALL_PRODUCTS_RESPONSE,
    payload: data
  });
  