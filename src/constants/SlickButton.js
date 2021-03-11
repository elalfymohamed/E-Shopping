import React from "react";

const SlickButton = ({ onCurrent, setOnCurrent, length, slides }) => {
  // console.log(slides);
  // if (!Array.isArray(slides) || slides.length <= 0) {
  //   return null;
  // }

  return (
    <ul className="hero__slick__dots">
      <li className={`${0 === onCurrent ? "hero__slick__dots__active" : ""}`}>
        <button
          type="button"
          tabIndex={`${0 === onCurrent ? "-1" : "0"}`}
          // onClick={() => setOnCurrent(length + 0)}
        />
      </li>
      <li className={`${1 === onCurrent ? "hero__slick__dots__active" : ""}`}>
        <button
          type="button"
          tabIndex={`${1 === onCurrent ? "-1" : "0"}`}
          // onClick={() => setCurrentIdx(currentIdx === length - 1 ? 0 : 0)}
        />
      </li>
      <li className={`${2 === onCurrent ? "hero__slick__dots__active" : ""}`}>
        <button
          type="button"
          tabIndex={`${2 === onCurrent ? "-1" : "0"}`}
          // onClick={() => setOnCurrent(+2)}
        />
      </li>
      <li className={`${3 === onCurrent ? "hero__slick__dots__active" : ""}`}>
        <button
          type="button"
          tabIndex={`${3 === onCurrent ? "-1" : "0"}`}
          // onClick={() => setOnCurrent(+3)}
        />
      </li>
    </ul>
  );
};

export default SlickButton;
