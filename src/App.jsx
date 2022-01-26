import React, { useState, useEffect } from "react";
import {
  getCategories,
  getRandomJoke,
  getJokeByQuery,
  getJokeFromCategory,
} from "./Components/Api";

import "./App.css";

import Header from "./Components/Header/Header";
import Gallery from "./Components/Gallery/Gallery";
import Display from "./Components/Display/Display";

const App = () => {
  const [changedCategory, setChangedCategory] = useState("");
  const [clickCounter, setClickCounter] = useState(0);

  function onChoseCategory(e) {
    setChangedCategory(e.target.innerHTML);
    if (e.target.innerHTML === changedCategory) {
      setClickCounter(clickCounter + 1);
    } else {
      setClickCounter(0);
    }
  }

  return (
    <main>
      <Header></Header>
      <Gallery onChoseCategory={onChoseCategory}></Gallery>
      <Display category={changedCategory} clickCounter={clickCounter}></Display>
    </main>
  );
};

export default App;
