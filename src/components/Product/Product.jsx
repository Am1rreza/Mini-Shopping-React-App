import styles from "./Product.module.css";

const Product = ({ product, onDelete }) => {
  return (
    <div className={styles.product}>
      <p>Product Name : {product.title} Course</p>
      <p>Product Price : {product.price}</p>
      <span>{product.quantity}</span>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Product;
