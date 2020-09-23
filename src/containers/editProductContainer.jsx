import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import { getProductDetail } from "../actions/productAction";
import DetailProductComponent from "../components/detailProductComponent";

class EditProductContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getProductDetail(this.props.match.params.id));
  }

  render() {
    return (
      <Container>
        <h2>Edit Product</h2>
        <br />
        <DetailProductComponent />
      </Container>
    );
  }
}

export default connect()(EditProductContainer);
