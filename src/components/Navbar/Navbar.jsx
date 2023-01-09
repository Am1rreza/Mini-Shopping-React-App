import styles from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <header className={styles.nav}>
      <h2>Shopping App</h2>
      <span>0</span>
    </header>
  );
};

export default Navbar;
