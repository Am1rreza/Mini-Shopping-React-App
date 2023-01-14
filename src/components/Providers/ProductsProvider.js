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

export const useProductsAction = () => useContext(ProductContextDispatcher);
