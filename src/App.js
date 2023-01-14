import "./App.css";
import React, { useState } from "react";
import ProductList from "./components/ProductList/ProductList";
import Navbar from "./components/Navbar/Navbar";
import Wrapper from "./components/HOC/Wrapper";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, title: "React", price: "99$", quantity: 1 },
    { id: 2, title: "HTML & CSS", price: "19$", quantity: 1 },
    { id: 3, title: "Node JS", price: "79$", quantity: 1 },
    { id: 4, title: "Tailwind", price: "39$", quantity: 1 },
  ]);

  // handlers
  const removeHandler = (id) => {
    const filteredProducts = products.filter((p) => p.id !== id);
    setProducts(filteredProducts);
  };

  const incrementHandler = (id) => {
    const index = products.findIndex((p) => p.id === id);
    // get all of the products
    const allProducts = [...products];
    // clone the selected index and update the quantity
    const product = { ...products[index] };
    product.quantity++;
    // replace the product
    allProducts[index] = product;
    // setState
    setProducts(allProducts);
  };

  const changeHandler = (e, id) => {
    const index = products.findIndex((p) => p.id === id);
    // get all of the products
    const allProducts = [...products];
    // clone the selected index and update the title
    const product = { ...products[index] };
    product.title = e.target.value;
    // replace the product
    allProducts[index] = product;
    // setState
    setProducts(allProducts);
  };

  const decrementHandler = (id) => {
    const index = products.findIndex((p) => p.id === id);
    // get all of the products
    const allProducts = [...products];
    // clone the selected index and update the quantity
    const product = { ...products[index] };
    if (product.quantity === 1) {
      removeHandler(id);
      return;
    }
    product.quantity--;
    // replace the product
    allProducts[index] = product;
    // setState
    setProducts(allProducts);
  };

  return (
    <>
      <Navbar totalItems={products.filter((p) => p.quantity > 0).length} />
      <ProductList
        products={products}
        onRemove={removeHandler}
        onChange={changeHandler}
        onIncrement={incrementHandler}
        onDecrement={decrementHandler}
      />
    </>
  );
};

export default Wrapper(App, "container");
