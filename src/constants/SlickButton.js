import React from "react";

const SlickButton = ({ onCurrent, setOnCurrent, length, slides }) => {
  const zero = 0;
  const one = 1;
  const two = 2;
  const three = 3;

  return (
    <ul className="hero__slick__dots">
      <li
        className={`${zero === onCurrent ? "hero__slick__dots__active" : ""}`}
      >
        <button
          type="button"
          tabIndex={`${zero === onCurrent ? "-1" : "0"}`}
          // onClick={() => setOnCurrent(length + 0)}
        />
      </li>
      <li className={`${one === onCurrent ? "hero__slick__dots__active" : ""}`}>
        <button
          type="button"
          tabIndex={`${one === onCurrent ? "-1" : "0"}`}
          // onClick={() => setCurrentIdx(currentIdx === length - 1 ? 0 : 0)}
        />
      </li>
      <li className={`${two === onCurrent ? "hero__slick__dots__active" : ""}`}>
        <button
          type="button"
          tabIndex={`${two === onCurrent ? "-1" : "0"}`}
          // onClick={() => setOnCurrent(+2)}
        />
      </li>
      <li
        className={`${three === onCurrent ? "hero__slick__dots__active" : ""}`}
      >
        <button
          type="button"
          tabIndex={`${three === onCurrent ? "-1" : "0"}`}
          // onClick={() => setOnCurrent(+3)}
        />
      </li>
    </ul>
  );
};

export default SlickButton;
