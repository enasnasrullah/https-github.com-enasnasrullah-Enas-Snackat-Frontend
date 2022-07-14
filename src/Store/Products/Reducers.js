import * as types from "./Types";

const INITIAL_STATE = {
  list: []
};

const ProductsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_ALL_PRODUCTS_RESPONSE:
      return {
        ...state,
        list: action.payload.list,
       
      };
  default:
      return state;
  }
};

export default ProductsReducer;
