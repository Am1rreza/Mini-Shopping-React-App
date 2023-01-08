import "./App.css";
import React, { Component } from "react";
import Product from "./components/Product/Product";
import ProductList from "./components/ProductList/ProductList";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <h1>Shopping App</h1>
        <ProductList />
      </div>
    );
  }
}

export default App;
