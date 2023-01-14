import "./App.css";
import React from "react";
import ProductList from "./components/ProductList/ProductList";
import Navbar from "./components/Navbar/Navbar";
import Wrapper from "./components/HOC/Wrapper";
import ProductsProvider, {
  useProducts,
  useProductsAction,
} from "./components/Providers/ProductsProvider";

const App = () => {
  // import state
  const products = useProducts();
  const setProducts = useProductsAction();

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
      <ProductsProvider>
        <Navbar/>
        <ProductList
          onRemove={removeHandler}
          onChange={changeHandler}
          onIncrement={incrementHandler}
          onDecrement={decrementHandler}
        />
      </ProductsProvider>
    </>
  );
};

export default Wrapper(App, "container");
