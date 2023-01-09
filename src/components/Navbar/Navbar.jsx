import styles from "./Navbar.module.css";

const Navbar = ({totalItems}) => {
  return (
    <header className={styles.nav}>
      <h2>Shopping App</h2>
      <span>{totalItems}</span>
    </header>
  );
};

export default Navbar;
