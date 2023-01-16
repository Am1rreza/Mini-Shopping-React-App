import { useState } from "react";
import { useProductsAction } from "../Providers/ProductsProvider";

const Filter = () => {
  const dispatch = useProductsAction();
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    setValue(e.target.value);
    dispatch({ type: "filter", event: e });
  };

  return (
    <div>
      <p>Filter Products Based on :</p>
      <div>
        Order by
        <select onChange={changeHandler} value={value}>
          <option value="">All</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="X">X</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
