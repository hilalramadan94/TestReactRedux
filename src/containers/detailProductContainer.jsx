import React, { Component } from "react";
import { connect } from "react-redux";
import DetailProductComponent from "../components/detailProductComponent";
import { Container } from "reactstrap";
import { getProductDetail } from "../actions/productAction";

class DetailProductContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getProductDetail(this.props.match.params.id));
  }

  render() {
    return (
      <Container>
        <h1>Detail Product</h1>
        <DetailProductComponent />
      </Container>
    );
  }
}

export default connect()(DetailProductContainer);
