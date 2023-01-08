import styles from "./Product.module.css";

const Product = ({ product, onDelete, onIncrement }) => {
  return (
    <div className={styles.product}>
      <p>{product.title} Course</p>
      <p>Price : {product.price}</p>
      <span className={styles.value}>{product.quantity}</span>
      <button
        className={`${styles.button} ${styles.inc}`}
        onClick={onIncrement}
      >
        Increment
      </button>
      <button className={styles.button} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default Product;
