import "./App.css";
import React, { Component } from "react";
import Product from "./components/Product/Product";

class App extends Component {
  state = {
    products: [
      { id: 1, title: "React", price: "99$" },
      { id: 2, title: "HTML & CSS", price: "19$" },
      { id: 3, title: "Node JS", price: "79$" },
      { id: 4, title: "Tailwind", price: "39$" },
    ],
  };

  render() {
    return (
      <div className="container">
        <h1>Shopping App</h1>
        {this.state.products.map((product) => {
          return (
            <Product
              name={product.title}
              price={product.price}
              key={product.id}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
