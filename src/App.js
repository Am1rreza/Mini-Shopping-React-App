import "./App.css";
import React, { Component } from "react";
import ProductList from "./components/ProductList/ProductList";
import Navbar from "./components/Navbar/Navbar";
import Wrapper from "./components/HOC/Wrapper";
import CounterOne from "./components/Context/CounterOne";
import CounterProvider from "./components/Context/CounterProvider";
import CountReducer from "./components/Context/Reducer/CountRecuer";

class App extends Component {
  state = {
    products: [
      { id: 1, title: "React", price: "99$", quantity: 1 },
      { id: 2, title: "HTML & CSS", price: "19$", quantity: 1 },
      { id: 3, title: "Node JS", price: "79$", quantity: 1 },
      { id: 4, title: "Tailwind", price: "39$", quantity: 1 },
    ],
  };

  // handlers
  removeHandler = (id) => {
    const filteredProducts = this.state.products.filter((p) => p.id !== id);
    this.setState({ products: filteredProducts });
  };

  incrementHandler = (id) => {
    const index = this.state.products.findIndex((p) => p.id === id);
    // get all of the products
    const products = [...this.state.products];
    // clone the selected index and update the quantity
    const product = { ...this.state.products[index] };
    product.quantity++;
    // replace the product
    products[index] = product;
    // setState
    this.setState({ products });
  };

  changeHandler = (e, id) => {
    const index = this.state.products.findIndex((p) => p.id === id);
    // get all of the products
    const products = [...this.state.products];
    // clone the selected index and update the title
    const product = { ...this.state.products[index] };
    product.title = e.target.value;
    // replace the product
    products[index] = product;
    // setState
    this.setState({ products });
  };

  decrementHandler = (id) => {
    const index = this.state.products.findIndex((p) => p.id === id);
    // get all of the products
    const products = [...this.state.products];
    // clone the selected index and update the quantity
    const product = { ...this.state.products[index] };
    if (product.quantity === 1) {
      this.removeHandler(id);
      return;
    }
    product.quantity--;
    // replace the product
    products[index] = product;
    // setState
    this.setState({ products });
  };

  render() {
    return (
      <>
        {/* <Navbar
          totalItems={this.state.products.filter((p) => p.quantity > 0).length}
        />
        <ProductList
          products={this.state.products}
          onRemove={this.removeHandler}
          onChange={this.changeHandler}
          onIncrement={this.incrementHandler}
          onDecrement={this.decrementHandler}
        /> */}
        <CounterProvider>
          <CountReducer/>
        </CounterProvider>
      </>
    );
  }
}

export default Wrapper(App, "container");
