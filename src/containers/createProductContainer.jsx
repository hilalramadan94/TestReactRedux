import React, { Component } from "react";
import { Container } from "reactstrap";
import FormComponent from "../components/formComponent";
import { connect } from "react-redux";
import { postProductCreate } from "../actions/productAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponseDataProduct: state.products.getResponseDataProduct,
    errorResponseDataProduct: state.products.errorResponseDataProduct,
  };
};

class CreateProductContainer extends Component {
  handleSubmit(data) {
    this.props.dispatch(postProductCreate(data));
  }

  render() {
    if (
      this.props.errorResponseDataProduct ||
      this.props.getResponseDataProduct
    )
      if (this.props.getResponseDataProduct) {
        swal(
          "Product Created!",
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
        <h1>Create Product</h1>
        <br />
        <FormComponent
          onSubmit={(data) => this.handleSubmit(data)}
        ></FormComponent>
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(CreateProductContainer);
