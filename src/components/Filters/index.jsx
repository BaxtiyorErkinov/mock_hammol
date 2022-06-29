import React, { useEffect, useState } from "react";

//icons
import { AiOutlineSearch } from "react-icons/ai";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesAction } from "../../store/action-creators/getCategories";
import { filterByCategoryAction } from "../../store/action-creators/filterByCategory";
import { searchProductsAction } from "../../store/action-creators/searchProducts";
import { searchWithExactCategory } from "../../store/action-creators/searchingWithExactCategory";

//styles
import "./filters.scss";

const Filters = () => {
  const dispatch = useDispatch();
  const categories = useSelector((data) => data.categories);
  const [filter, setFilter] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    dispatch(getCategoriesAction());
  }, []);
  useEffect(() => {
    dispatch(filterByCategoryAction(filter));
  }, [filter]);
  useEffect(() => {
    dispatch(searchProductsAction(query));
  }, [query]);
  useEffect(() => {
    if (query && filter) {
      dispatch(searchWithExactCategory(query, filter));
    } else if(!query) {
      dispatch(filterByCategoryAction(filter));
    }
  }, [query, filter]);
  return (
    <div className="filters">
      <div className="search__section">
        <label htmlFor="search" className="search">
          <input
            type="text"
            name="search"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autocomplete="off"
          />
          <span className="icon">
            <AiOutlineSearch />
          </span>
        </label>
      </div>
      <div className="categories__section">
        <ul className="categories__list">
          <li
            className={`categories__list-item ${filter ? "" : "all"}`}
            onClick={() => setFilter("")}
          >
            All
          </li>
          {categories.categories.map((category) => (
            <li
              className={`categories__list-item ${
                filter === category ? "active" : ""
              }`}
              onClick={() => setFilter(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filters;
