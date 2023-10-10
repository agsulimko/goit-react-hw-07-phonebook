import React from "react";

import css from "./Filter.module.css";
import { useDispatch } from "react-redux";
import { setFilter } from "redux/filterSlice";
const Filter = (e) => {
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value));
  };
  return (
    <div className={css.labelDiv}>
      <label className={css.label}>Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        //  value={filter}
        onChange={handleFilterChange}
        name="filterQuery"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        placeholder="Search contacts..."
      />
    </div>
  );
};

export default Filter;
