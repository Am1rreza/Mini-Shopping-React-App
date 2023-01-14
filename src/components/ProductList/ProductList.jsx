import Product from "../Product/Product";
import { useProducts, useProductsAction } from "../Providers/ProductsProvider";

const ProductList = () => {
  const products = useProducts();
  const { incrementHandler, changeHandler, decrementHandler, removeHandler } =
    useProductsAction();

  // conditional rendering
  if (products.length === 0) {
    return (
      <h2 style={{ marginTop: "0.5rem" }}>There is no product in your cart!</h2>
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
