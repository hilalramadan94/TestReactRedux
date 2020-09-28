import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import { getProductDetail, putProductEdit } from "../actions/productAction";
import FormComponent from "../components/formComponent";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponseDataProduct: state.products.getResponseDataProduct,
    errorResponseDataProduct: state.products.errorResponseDataProduct,
  };
};

class EditProductContainer extends Component {
  //method getproductdetail
  componentDidMount() {
    this.props.dispatch(getProductDetail(this.props.match.params.id));
  }

  //method submit
  handleSubmit(data) {
    this.props.dispatch(putProductEdit(data, this.props.match.params.id));
  }

  render() {
    if (
      this.props.errorResponseDataProduct ||
      this.props.getResponseDataProduct
    )
      if (this.props.getResponseDataProduct) {
        swal(
          "Product Updated!",
          "Name : " +
            this.props.getResponseDataProduct.name +
            "\r\nPrice : " +
            this.props.getResponseDataProduct.price,
          "success"
        ).then(function () {
          window.location = "/";
        });
      } else {
        swal("Failed!", this.props.errorResponseDataProduct, "error");
      }

    return (
      <Container>
        <h2>Edit Product</h2>
        <br />
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(EditProductContainer);
