import React, { useState } from "react";

const HeaderSearch = () => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState("All Categories");

  const handleChange = (e) => {
    console.log();
    setOptions();
  };

  return (
    <form>
      <div className="advance-search__input">
        <input type="text" placeholder="Search your product" />
      </div>
      <div className="advance-search__select" onClick={() => setOpen(!open)}>
        {/* <select
          className="advance-search__nice__select"
          style={{ display: "none" }}
        >
          <option>All Categories</option>
          <option>Mobile</option>
          <option>Computer</option>
          <option>Laptop</option>
          <option>Camera</option>
        </select> */}
        <div
          className={`advance-search__nice__select nice--select ${
            open ? "open" : ""
          }`}
        >
          <span className="nice__select__current"> {options}</span>
          <ul className="nice__select__list" onClick={handleChange}>
            <li value="All Categories" className="option selected focus">
              All Categories
            </li>
            <li value="Mobile" className="option">
              Mobile
            </li>
            <li value="Computer" className="option">
              Computer
            </li>
            <li value="Laptop" className="option">
              Laptop
            </li>
            <li value="Camera" className="option">
              Camera
            </li>
          </ul>
        </div>
      </div>
      <div className="advance-search__submit">
        <button>
          <i className="icofont-search-2" />
        </button>
      </div>
    </form>
  );
};

export default HeaderSearch;
