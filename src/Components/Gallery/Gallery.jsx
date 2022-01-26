import React, { useState, useEffect } from "react";
import s from "./Gallery.module.css";
import { getCategories } from "../Api";

const Gallery = () => {
  const [galleryArr, setGalleryArr] = useState([]);
  const [status, setStatus] = useState("idle");
  const [changedCategory, setChangedCategory] = useState("");

  useEffect(() => {
    getCategories().then((data) => {
      setGalleryArr(data);
      setStatus("resolved");
    });
    //   .catch((e) => {
    //     console.log(e);

    //     setStatus("rejected");
    //   });
  }, []);

  function onChoseCategory(e) {
    console.log(e.currentTarget.innerHTML);
    setChangedCategory(e.currentTarget.innerHTML);
  }

  return (
    <div className="container">
      <h2>Categories</h2>
      <ul>
        {status === "resolved" ? (
          galleryArr.map((c) => {
            return (
              <li key={c}>
                <div className={s.categoryButton} onClick={onChoseCategory}>
                  {c}
                </div>
              </li>
            );
          })
        ) : (
          <li>category</li>
        )}
      </ul>
    </div>
  );
};
export default Gallery;
