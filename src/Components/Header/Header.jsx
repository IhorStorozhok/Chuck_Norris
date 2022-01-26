import React, { useState, useEffect } from "react";
import { getRandomJoke } from "../Api";

import s from "./Header.module.css";

console.log(s);

const Header = () => {
  const [logo, setLogo] = useState("");
  const [status, setStatus] = useState("idle");
  // starting upload

  useEffect(() => {
    getRandomJoke()
      .then((data) => {
        setLogo(data.icon_url);
        setStatus("resolved");
      })
      .catch((e) => {
        console.log(e);

        setStatus("rejected");
      });
  }, [logo, status]);

  return (
    <header className={s.header}>
      <div className="container headerContainer">
        <div className={s.logoBox}>
          <img src={logo} alt="icon of invulnerable man " className={s.logo} />
          <h1 className={s.titleName}>Chuck Norris</h1>
        </div>
      </div>
    </header>
  );
};
export default Header;
