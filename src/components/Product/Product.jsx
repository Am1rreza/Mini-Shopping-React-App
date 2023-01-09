import styles from "./Product.module.css";

const Product = ({ product, onDelete, onIncrement, onChange,onDecrement }) => {
  return (
    <div className={styles.product}>
      <p>{product.title} Course</p>
      <p>{product.price}</p>
      <span className={styles.value}>{product.quantity}</span>
      <input className={styles.input} type="text" onChange={onChange} value={product.title} />
      <button
        className={`${styles.button} ${styles.inc}`}
        onClick={onIncrement}
      >
        +
      </button>
      <button
        className={`${styles.button} ${styles.inc}`}
        onClick={onDecrement}
      >
        -
      </button>
      <button className={styles.button} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default Product;
