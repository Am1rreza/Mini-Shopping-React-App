import { useState } from "react";
import Product from "../Product/Product";

const ProductList = () => {
  const [products, setProducts] = useState([
    { id: 1, title: "React", price: "99$", quantity: 1 },
    { id: 2, title: "HTML & CSS", price: "19$", quantity: 2 },
    { id: 3, title: "Node JS", price: "79$", quantity: 1 },
    { id: 4, title: "Tailwind", price: "39$", quantity: 3 },
  ]);

  // handlers
  const removeHandler = (id) => {
    const filteredProducts = products.filter((p) => p.id !== id);
    setProducts(filteredProducts);
  };

  const incrementHandler = (id) => {
    const allProducts = [...products];
    const selectedItem = allProducts.find((p) => p.id === id);
    selectedItem.quantity++;
    setProducts(allProducts);
  };

  const changeHandler = (e, id) => {
    const allProducts = [...products];
    const selectedItem = allProducts.find((p) => p.id === id);
    selectedItem.title = e.target.value;
    setProducts(allProducts);
  };

  const decrementHandler = (id) => {
    const allProducts = [...products];
    const selectedItem = allProducts.find((p) => p.id === id);
    if (selectedItem.quantity === 1) {
      removeHandler(id);
      return;
    }
    selectedItem.quantity--;
    setProducts(allProducts);
  };

  // conditional rendering
  if (products.length === 0) {
    return (
      <h2 style={{ marginTop: "2rem" }}>There is no product in your cart!</h2>
    );
  }

  return (
    <div>
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            product={product}
            onDelete={() => removeHandler(product.id)}
            onChange={(e) => changeHandler(e, product.id)}
            onIncrement={() => incrementHandler(product.id)}
            onDecrement={() => decrementHandler(product.id)}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
