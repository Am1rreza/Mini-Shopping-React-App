import { useState } from "react";
import { useProductsAction } from "../../components/Providers/ProductsProvider";
import styles from "./search.module.css";

const Search = ({ filterFunction, filterData }) => {
  const dispatch = useProductsAction();
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    setValue(e.target.value);
    filterFunction(filterData);
    if (filterData === "" || filterData === "All") {
      dispatch({ type: "searchWithNoOrder", event: e });
    } else {
      dispatch({ type: "search", event: e });
    }
  };

  return (
    <div className={styles.formControl}>
      <p>Search For : </p>
      <input
        type="text"
        placeholder="Search Something..."
        onChange={(e) => changeHandler(e)}
        value={value}
      />
    </div>
  );
};

export default Search;
