import styles from "./Product.module.css";

const Product = ({products,onDelete}) => {
  return (
    <div className={styles.product}>
      <p>Product Name : {products.name} Course</p>
      <p>Product Price : {products.price}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Product;
