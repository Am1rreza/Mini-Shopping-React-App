import { useState } from "react";
import Product from "../Product/Product";

const ProductList = () => {
  const [products, setProducts] = useState([
    { id: 1, title: "React", price: "99$" },
    { id: 2, title: "HTML & CSS", price: "19$" },
    { id: 3, title: "Node JS", price: "79$" },
    { id: 4, title: "Tailwind", price: "39$" },
  ]);

  // handlers
  const removeHandler = (id) => {
    const filteredProducts = products.filter((p) => p.id !== id);
    setProducts(filteredProducts);
  };

  return (
    <div>
      {products.map((product) => {
        return (
          <Product
            name={product.title}
            price={product.price}
            key={product.id}
            onDelete={() => removeHandler(product.id)}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
