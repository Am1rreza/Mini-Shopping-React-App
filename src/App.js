import "./App.css";
import React from "react";
import ProductList from "./components/ProductList/ProductList";
import Navbar from "./components/Navbar/Navbar";
import Wrapper from "./components/HOC/Wrapper";
import ProductsProvider from "./components/Providers/ProductsProvider";
import Filter from "./components/Filter/Filter";
import Search from "./common/Search/Search";

const App = () => {
  return (
    <>
      <ProductsProvider>
        <Navbar />
        <Search/>
        <Filter />
        <ProductList />
      </ProductsProvider>
    </>
  );
};

export default Wrapper(App, "container");
