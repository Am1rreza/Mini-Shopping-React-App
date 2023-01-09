import "./App.css";
import React, { Component } from "react";
import ProductList from "./components/ProductList/ProductList";
import Navbar from "./components/Navbar/Navbar";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <Navbar />
        <ProductList />
      </div>
    );
  }
}

export default App;
