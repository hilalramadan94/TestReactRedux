import {
  GET_PRODUCTS_LIST,
  GET_PRODUCT_DETAIL,
  POST_PRODUCT_CREATE,
  PUT_PRODUCT_EDIT,
  DELETE_PRODUCT,
} from "../actions/productAction";

let initialState = {
  //Product List
  getProductsList: false,
  errorProductsList: false,
  //Product Detail
  getProductDetail: false,
  errorProductDetail: false,
  //Product Data
  getResponseDataProduct: false,
  errorResponseDataProduct: false,
  //Product Delete
  getResponseDeleteProduct: false,
  errorResponseDeleteProduct: false,
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

    case PUT_PRODUCT_EDIT:
      return {
        ...state,
        getResponseDataProduct: action.payload.data,
        errorResponseDataProduct: action.payload.errorMessage,
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        getResponseDeleteProduct: action.payload.data,
        errorResponseDeleteProduct: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default products;
