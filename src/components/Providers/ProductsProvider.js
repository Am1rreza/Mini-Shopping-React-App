import React, { useState, useContext } from "react";

// Create context
const ProductContext = React.createContext(); // staet
const ProductContextDispatcher = React.createContext(); // setState

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, title: "React", price: "99$", quantity: 1 },
    { id: 2, title: "HTML & CSS", price: "19$", quantity: 1 },
    { id: 3, title: "Node JS", price: "79$", quantity: 1 },
    { id: 4, title: "Tailwind", price: "39$", quantity: 1 },
  ]);

  return (
    <ProductContext.Provider value={products}>
      <ProductContextDispatcher.Provider value={setProducts}>
        {children}
      </ProductContextDispatcher.Provider>
    </ProductContext.Provider>
  );
};

export default ProductsProvider;

// Custom Hooks
export const useProducts = () => useContext(ProductContext);

export const useProductsAction = () => {
  const setProducts = useContext(ProductContextDispatcher);
  const products = useContext(ProductContext);

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

  return { removeHandler, incrementHandler, changeHandler, decrementHandler };
};
