import styles from "./Product.module.css";
import { BiTrash } from "react-icons/bi";

const Product = (props) => {
  const { product, onDelete, onIncrement, onDecrement } = props;

  return (
    <div className={styles.product}>
      <p>{product.title} Course</p>
      <p>{product.price}</p>
      <span className={styles.value}>{product.quantity}</span>
      <button
        className={`${styles.button} ${styles.inc}`}
        onClick={onIncrement}
      >
        +
      </button>
      <button className={styles.button} onClick={onDelete}>
        Delete
      </button>
      <button
        className={`${styles.button} ${styles.inc} ${
          product.quantity === 1 && styles.remove
        }`}
        onClick={onDecrement}
      >
        {product.quantity > 1 ? "-" : <BiTrash />}
      </button>
    </div>
  );
};

export default Product;
