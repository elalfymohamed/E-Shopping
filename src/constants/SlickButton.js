import React from "react";

const SlickButton = ({ onCurrent, setOnCurrent }) => {
  return (
    <ul className="hero__slick__dots">
      <li
        className={`${0 === setOnCurrent ? "hero__slick__dots__active" : ""}`}
      >
        <button
          type="button"
          tabIndex={`${0 === setOnCurrent ? "-1" : "0"}`}
          onClick={() => onCurrent(+0)}
        />
      </li>
      <li
        className={`${1 === setOnCurrent ? "hero__slick__dots__active" : ""}`}
      >
        <button
          type="button"
          tabIndex={`${1 === setOnCurrent ? "-1" : "0"}`}
          onClick={() => onCurrent(+1)}
        />
      </li>
      <li
        className={`${2 === setOnCurrent ? "hero__slick__dots__active" : ""}`}
      >
        <button
          type="button"
          tabIndex={`${2 === setOnCurrent ? "-1" : "0"}`}
          onClick={() => onCurrent(+2)}
        />
      </li>
      <li
        className={`${3 === setOnCurrent ? "hero__slick__dots__active" : ""}`}
      >
        <button
          type="button"
          tabIndex={`${3 === setOnCurrent ? "-1" : "0"}`}
          onClick={() => onCurrent(+3)}
        />
      </li>
    </ul>
  );
};

export default SlickButton;
