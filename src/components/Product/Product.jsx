import styles from "./Product.module.css";

const Product = (props) => {
  return (
    <div className={styles.product}>
      <p>Product Name : {props.name} Course</p>
      <p>Product Price : {props.price}</p>
      <button onClick={props.onDelete}>Delete</button>
    </div>
  );
};

export default Product;
