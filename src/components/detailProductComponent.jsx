import React from "react";
import { connect } from "react-redux";
import { Table, Spinner } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    getProductDetail: state.products.getProductDetail,
    errorProductDetail: state.products.errorProductDetail,
  };
};

export const DetailProductComponent = (props) => {
  return (
    <div>
      {props.getProductDetail ? (
        <Table striped>
          <tbody>
            <tr>
              <td width="25%">ID</td>
              <td>: {props.getProductDetail.id}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>: {props.getProductDetail.name}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>: {props.getProductDetail.price}</td>
            </tr>
          </tbody>
        </Table>
      ) : (
        <div className="text-center">
          <Spinner color="primary"></Spinner>
        </div>
      )}
    </div>
  );
};

//export default connect(mapStateToProps, null)(DetailProductComponent);
export default connect(mapStateToProps, null)(DetailProductComponent);
