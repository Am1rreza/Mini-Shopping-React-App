import { useState } from "react";
import styles from "./filter.module.css";
import { useProductsAction } from "../Providers/ProductsProvider";
import SelectComponent from "../../common/Select/Select";

const Filter = () => {
  const dispatch = useProductsAction();
  const [order, setOrder] = useState("");
  const [sort, setSort] = useState("");

  // options of the select tag
  const orderOptions = [
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
  const orderHandler = (selectedOption) => {
    setOrder(selectedOption);
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
      <SelectComponent
        title={"Order by"}
        value={order}
        onChange={orderHandler}
        options={orderOptions}
      />
      <SelectComponent
        title={"Sort by"}
        value={sort}
        onChange={sortHandler}
        options={sortOptions}
      />
    </div>
  );
};

export default Filter;
