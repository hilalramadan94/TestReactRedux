import React, { Component } from "react";
import { Container } from "reactstrap";
import FormComponent from "../components/formComponent";
import { connect } from "react-redux";
import { postProductCreate } from "../actions/productAction";

class CreateProductContainer extends Component {
  handleSubmit(data) {
    this.props.dispatch(postProductCreate(data));
  }

  render() {
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

export default connect()(CreateProductContainer);
