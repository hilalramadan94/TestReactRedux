import axios from "axios";

export const GET_PRODUCTS_LIST = "GET_PRODUCTS_LIST";
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
export const POST_PRODUCT_CREATE = "POST_PRODUCT_CREATE";

//Action Product List
export const getProductList = () => {
  return (dispatch) => {
    axios
      .get("http://my-json-server.typicode.com/hilalramadan94/testdb/products")
      .then(function (response) {
        dispatch({
          type: GET_PRODUCTS_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_PRODUCTS_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

//Action Product Detail
export const getProductDetail = (id) => {
  return (dispatch) => {
    axios
      .get(
        "http://my-json-server.typicode.com/hilalramadan94/testdb/products/" +
          id
      )
      .then(function (response) {
        dispatch({
          type: GET_PRODUCT_DETAIL,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_PRODUCT_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

//Action Product Create
export const postProductCreate = (data) => {
  return (dispatch) => {
    axios
      .post(
        "http://my-json-server.typicode.com/hilalramadan94/testdb/products",
        data
      )
      .then(function (response) {
        console.log(response);

        dispatch({
          type: POST_PRODUCT_CREATE,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_PRODUCT_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
//https://api.mocki.io/v1/c3371e1e
//http://my-json-server.typicode.com/hilalramadan94/testdb/products
