import React, { useState, useEffect } from "react";
import s from "./Display.module.css";
import { getJokeFromCategory, getRandomJoke } from "../Api";

const Display = ({ category, clickCounter }) => {
  const [quote, setQuote] = useState("");

  function getUniqueRandomJoke() {
    getRandomJoke().then((data) => {
      if (data.value === quote) {
        getUniqueRandomJoke();
      }
      setQuote(data.value);
    });
  }

  function getUniqueJokeFromCategory() {
    getJokeFromCategory(category).then((data) => {
      if (data.value === quote) {
        getUniqueJokeFromCategory();
      }
      setQuote(data.value);
    });
  }

  useEffect(() => {
    category === "" ? getUniqueRandomJoke() : getUniqueJokeFromCategory();
  }, [category, clickCounter]);
  return (
    <div className="container">
      <div className={s.displayForQuote}>
        <p className={s.quote}>{quote}</p>
        <div className={s.chukImgThumb}></div>
      </div>
    </div>
  );
};

export default Display;
