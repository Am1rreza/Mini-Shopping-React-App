import { useState } from "react";
import Select from "react-select";
import styles from "./filter.module.css";
import { useProductsAction } from "../Providers/ProductsProvider";

const Filter = () => {
  const dispatch = useProductsAction();
  const [value, setValue] = useState("");
  const [sort, setSort] = useState("");

  // options of the select tag
  const options = [
    { value: "", label: "ALL" },
    { value: "XS", label: "XS" },
    { value: "S", label: "S" },
    { value: "M", label: "M" },
    { value: "L", label: "L" },
    { value: "XL", label: "XL" },
    { value: "XXL", label: "XXL" },
  ];
  const sortOptions = [
    { value: "Highest", label: "Highest" },
    { value: "Lowest", label: "Lowest" },
  ];

  // handlers
  const changeHandler = (selectedOption) => {
    setValue(selectedOption);
    dispatch({ type: "filter", selectedOption: selectedOption });
    dispatch({ type: "sort", selectedOption: sort });
  };

  const sortHandler = (selectedOption) => {
    setSort(selectedOption);
    dispatch({ type: "sort", selectedOption: selectedOption });
  };

  return (
    <div className={styles.filter}>
      <p>Filter Products :</p>
      <div className={styles.selectContainer}>
        <span>Order by</span>
        <Select
          value={value}
          onChange={changeHandler}
          options={options}
          className={styles.select}
        />
      </div>
      <div className={styles.selectContainer}>
        <span>Sort by</span>
        <Select
          value={sort}
          onChange={sortHandler}
          options={sortOptions}
          className={styles.select}
        />
      </div>
    </div>
  );
};

export default Filter;
