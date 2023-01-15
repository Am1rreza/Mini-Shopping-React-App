import React, { useContext, useReducer } from "react";

// Create context
const ProductContext = React.createContext(); // staet
const ProductContextDispatcher = React.createContext(); // setState
// Reducer
const initialState = [
  { id: 1, title: "React", price: "99$", quantity: 1 },
  { id: 2, title: "HTML & CSS", price: "19$", quantity: 1 },
  { id: 3, title: "Node JS", price: "79$", quantity: 1 },
  { id: 4, title: "Tailwind", price: "39$", quantity: 1 },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      const index = state.findIndex((p) => p.id === action.id);
      // get all of the products
      const allProducts = [...state];
      // clone the selected index and update the quantity
      const product = { ...state[index] };
      product.quantity++;
      // replace the product
      allProducts[index] = product;
      // setState
      return allProducts;
    }

    case "decrement": {
      const index = state.findIndex((p) => p.id === action.id);
      // get all of the products
      const allProducts = [...state];
      // clone the selected index and update the quantity
      const product = { ...state[index] };
      if (product.quantity === 1) {
        const filteredProducts = state.filter((p) => p.id !== action.id);
        return filteredProducts;
      }
      product.quantity--;
      // replace the product
      allProducts[index] = product;
      // setState
      return allProducts;
    }

    case "edit": {
      const index = state.findIndex((p) => p.id === action.id);
      // get all of the products
      const allProducts = [...state];
      // clone the selected index and update the title
      const product = { ...state[index] };
      product.title = action.event.target.value;
      // replace the product
      allProducts[index] = product;
      // setState
      return allProducts;
    }

    case "remove":
      const filteredProducts = state.filter((p) => p.id !== action.id);
      return filteredProducts;

    default:
      return state;
  }
};

const ProductsProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductContext.Provider value={products}>
      <ProductContextDispatcher.Provider value={dispatch}>
        {children}
      </ProductContextDispatcher.Provider>
    </ProductContext.Provider>
  );
};

export default ProductsProvider;

// Custom Hooks
export const useProducts = () => useContext(ProductContext);

export const useProductsAction = () => useContext(ProductContextDispatcher);
