import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import React, { Component } from "react";
import { Col, FormGroup, Row, Input, Label, Button } from "reactstrap";
import productValidation from "../validations/productValidation";

const mapStateToProps = (state) => {
  return {
    initialValues: {
      name: state.products.getProductDetail.name,
      price: state.products.getProductDetail.price,
    },
  };
};
//NOTE : Wajib initialValues

const renderField = ({
  input,
  type,
  placeholder,
  label,
  disabled,
  readonly,
  meta: { touched, error, warning },
}) => (
  <Row>
    <Col>
      <Label htmlFor="{input}" className="col-form-label">
        {label}
      </Label>
    </Col>
    <Col md="12">
      <Input
        {...input}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        readonly={readonly}
      ></Input>
      {touched &&
        ((error && <p style={{ color: "red" }}>{error}</p>) ||
          (warning && <p style={{ color: "yellow" }}>{warning}</p>))}
    </Col>
  </Row>
);

class FormComponent extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <FormGroup row>
          <Col md={4}>
            <FormGroup>
              <Field
                type="text"
                name="name"
                component={renderField}
                label="Name :"
              />
            </FormGroup>
            <FormGroup>
              <Field
                type="text"
                name="price"
                component={renderField}
                label="Price :"
              />
            </FormGroup>
            <FormGroup>
              <Button
                type="submit"
                color="dark"
                disabled={this.props.submitting}
              >
                Submit
              </Button>
            </FormGroup>
          </Col>
        </FormGroup>
      </form>
    );
  }
}

//Setting Form
FormComponent = reduxForm({
  form: "FormComponent",
  validate: productValidation,
  enableReinitialize: true, //Form Bisa Digunakan di Create dan Edit
})(FormComponent);

export default connect(mapStateToProps, null)(FormComponent);
