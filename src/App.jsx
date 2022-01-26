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

const App = () => {
  return (
    <main>
      <Header></Header>
      <Gallery></Gallery>
    </main>
  );
};

export default App;
