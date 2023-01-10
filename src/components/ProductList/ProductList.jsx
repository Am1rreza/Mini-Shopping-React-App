import Product from "../Product/Product";

const ProductList = ({products,onRemove,onDecrement,onChange,onIncrement}) => {
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
            onDelete={() => onRemove(product.id)}
            onChange={(e) => onChange(e, product.id)}
            onIncrement={() => onIncrement(product.id)}
            onDecrement={() => onDecrement(product.id)}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
