import { useState } from "react";
import styles from "./search.module.css";

const Search = () => {
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.formControl}>
      <p>Search For : </p>
      <input
        type="text"
        placeholder="Search Something..."
        onChange={changeHandler}
        value={value}
      />
    </div>
  );
};

export default Search;
