import {
  GET_PRODUCTS_LIST,
  GET_PRODUCT_DETAIL,
  POST_PRODUCT_CREATE,
} from "../actions/productAction";

let initialState = {
  getProductsList: false,
  errorProductsList: false,
  getProductDetail: false,
  errorProductDetail: false,
  getResponseDataProduct: false,
  errorResponseDataProduct: false,
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_LIST:
      return {
        ...state,
        getProductsList: action.payload.data,
        errorProductsList: action.payload.errorMessage,
      };

    case GET_PRODUCT_DETAIL:
      return {
        ...state,
        getProductDetail: action.payload.data,
        errorProductDetail: action.payload.errorMessage,
      };

    case POST_PRODUCT_CREATE:
      return {
        ...state,
        getResponseDataProduct: action.payload.data,
        errorResponseDataProduct: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default products;
