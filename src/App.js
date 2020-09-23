import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarComponent from "./components/navBarComponent";
import JumbotronComponent from "./components/jumbotronComponent";
import FooterComponent from "./components/footerComponent";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import HomeContainer from "./containers/homeContainer";
import CreateProductContainer from "./containers/createProductContainer";
import EditProductContainer from "./containers/editProductContainer";
import DetailProductContainer from "./containers/detailProductContainer";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBarComponent></NavBarComponent>
        <JumbotronComponent></JumbotronComponent>
        <BrowserRouter>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/create" exact component={CreateProductContainer} />
          <Route path="/edit/:id" exact component={EditProductContainer} />
          <Route path="/detail/:id" exact component={DetailProductContainer} />
        </BrowserRouter>
        <FooterComponent></FooterComponent>
      </div>
    );
  }
}
