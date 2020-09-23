import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Row, Col, Spinner } from "reactstrap";
import {
  faInfo,
  faEdit,
  faTrash,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

//Table
const { SearchBar } = Search;
const columns = [
  {
    dataField: "id",
    text: "ID",
    headerStyle: () => {
      return { width: "5%" };
    },
    sort: true,
  },
  {
    dataField: "name",
    text: "Product Name",
    sort: true,
  },
  {
    dataField: "price",
    text: "Product Price",
    sort: true,
  },
  {
    dataField: "link",
    text: "Action",
    formatter: (rowContent, row) => {
      return (
        <div>
          <Link to={"detail/" + row.id}>
            <Button color="dark" className="mr-2">
              <FontAwesomeIcon icon={faInfo} />
              Detail
            </Button>
          </Link>
          <Link to={"edit/" + row.id}>
            <Button color="dark" className="mr-2">
              <FontAwesomeIcon icon={faEdit} />
              Edit
            </Button>
          </Link>
          <Button color="dark" className="mr-2">
            <FontAwesomeIcon icon={faTrash} />
            Delete
          </Button>
        </div>
      );
    },
  },
];

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const mapStateToProps = (state) => {
  return {
    getProductsList: state.products.getProductsList,
    errorProductsList: state.products.errorProductsList,
  };
};

const TableComponent = (props) => {
  return (
    <Container>
      {props.getProductsList ? (
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={props.getProductsList}
          columns={columns}
          defaultSorted={defaultSorted}
          search
        >
          {(props) => (
            <div>
              <Row>
                <Col>
                  <Link to={"/create"}>
                    <Button color="dark" className="mr-2">
                      <FontAwesomeIcon icon={faPlus} />
                      Create New
                    </Button>
                  </Link>
                </Col>
                <Col>
                  <div className="float-right">
                    <SearchBar {...props.searchProps} />
                  </div>
                </Col>
              </Row>
              <br />

              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory()}
              />
            </div>
          )}
        </ToolkitProvider>
      ) : (
        <div className="text-center">
          {props.errorProductsList ? (
            <h2>{props.errorProductsList}</h2>
          ) : (
            <Spinner color="primary"></Spinner>
          )}
        </div>
      )}
    </Container>
  );
};

export default connect(mapStateToProps, null)(TableComponent);
