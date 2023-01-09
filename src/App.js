import "./App.css";
import React, { Component } from "react";
import ProductList from "./components/ProductList/ProductList";
import Navbar from "./components/Navbar/Navbar";

class App extends Component {
  state = {
    products: [
      { id: 1, title: "React", price: "99$", quantity: 1 },
      { id: 2, title: "HTML & CSS", price: "19$", quantity: 2 },
      { id: 3, title: "Node JS", price: "79$", quantity: 1 },
      { id: 4, title: "Tailwind", price: "39$", quantity: 3 },
    ],
  };

  // handlers
  removeHandler = (id) => {
    const filteredProducts = this.state.products.filter((p) => p.id !== id);
    this.setState({ products: filteredProducts });
  };

  incrementHandler = (id) => {
    const allProducts = [...this.state.products];
    const selectedItem = allProducts.find((p) => p.id === id);
    selectedItem.quantity++;
    this.setState({ products: allProducts });
  };

  changeHandler = (e, id) => {
    const allProducts = [...this.state.products];
    const selectedItem = allProducts.find((p) => p.id === id);
    selectedItem.title = e.target.value;
    this.setState({ products: allProducts });
  };

  decrementHandler = (id) => {
    const allProducts = [...this.state.products];
    const selectedItem = allProducts.find((p) => p.id === id);
    if (selectedItem.quantity === 1) {
      this.removeHandler(id);
      return;
    }
    selectedItem.quantity--;
    this.setState({ products: allProducts });
  };

  render() {
    return (
      <div className="container">
        <Navbar
          totalItems={this.state.products.length}
        />
        <ProductList
          products={this.state.products}
          onRemove={this.removeHandler}
          onChange={this.changeHandler}
          onIncrement={this.incrementHandler}
          onDecrement={this.decrementHandler}
        />
      </div>
    );
  }
}

export default App;
