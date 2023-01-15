import Product from "../Product/Product";
import { useProducts, useProductsAction } from "../Providers/ProductsProvider";

const ProductList = () => {
  const products = useProducts();
  const dispatch = useProductsAction();

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
            onDelete={() => dispatch({ type: "remove", id: product.id })}
            onChange={(e) =>
              dispatch({ type: "edit", id: product.id, event: e })
            }
            onIncrement={() => dispatch({ type: "increment", id: product.id })}
            onDecrement={() => dispatch({ type: "decrement", id: product.id })}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
