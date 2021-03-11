import React, { useState } from "react";

const HeaderSearch = () => {
  const [open, setOpen] = useState(false);
  const [push, setPush] = useState("All Categories");
  const [options, setOptions] = useState([
    "All Categories",
    "Mobile",
    "Computer",
    "Laptop",
    "Camera",
  ]);

  return (
    <form>
      <div className="advance-search__input">
        <input type="text" placeholder="Search your product" />
      </div>
      <div className="advance-search__select" onClick={() => setOpen(!open)}>
        <select
          className="advance-search__nice__select"
          style={{ display: "none" }}
        >
          {options.map((item, i) => (
            <option data-value={item} className="option" key={i}>
              {item}
            </option>
          ))}
        </select>
        <div
          className={`advance-search__nice__select nice--select ${
            open ? "open" : ""
          }`}
        >
          <span className="nice__select__current">{push}</span>
          <ul className="nice__select__list">
            {options.map((item, i) => (
              <li
                data-value={item}
                className={`option ${push === item ? "selected" : ""} ${
                  open && push === item ? "focus" : ""
                }`}
                key={i}
                onClick={() => setPush(item)}
              >
                {item}
              </li>
            ))}
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
