import axios from "axios";

export const GET_PRODUCTS_LIST = "GET_PRODUCTS_LIST";
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
export const POST_PRODUCT_CREATE = "POST_PRODUCT_CREATE";
export const PUT_PRODUCT_EDIT = "PUT_PRODUCT_EDIT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

//Action Product List
export const getProductList = () => {
  return (dispatch) => {
    axios
      .get("https://test-b93f8.firebaseio.com/products.json")
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
      .get("https://test-b93f8.firebaseio.com/products/" + id + ".json")
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
  console.log(data);
  return (dispatch) => {
    axios
      .put(
        "https://test-b93f8.firebaseio.com/products/" + data.id + "/.json",
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
          type: POST_PRODUCT_CREATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

//Action Product Edit
export const putProductEdit = (data, id) => {
  return (dispatch) => {
    axios
      .put("https://test-b93f8.firebaseio.com/products/" + id + ".json", data)
      .then(function (response) {
        console.log(response);

        dispatch({
          type: PUT_PRODUCT_EDIT,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: PUT_PRODUCT_EDIT,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

//Action Product Delete
export const deleteProduct = (id) => {
  return (dispatch) => {
    axios
      .delete("https://test-b93f8.firebaseio.com/products/" + id + ".json")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
//https://api.mocki.io/v1/c3371e1e
//http://my-json-server.typicode.com/hilalramadan94/testdb/products
//https://test-b93f8.firebaseio.com/product
