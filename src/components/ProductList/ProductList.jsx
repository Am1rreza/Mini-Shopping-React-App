import Product from "../Product/Product";
import { useProducts, useProductsAction } from "../Providers/ProductsProvider";

const ProductList = () => {
  const products = useProducts();
  const setProducts = useProductsAction();

  // conditional rendering
  if (products.length === 0) {
    return (
      <h2 style={{ marginTop: "0.5rem" }}>There is no product in your cart!</h2>
    );
  }

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
