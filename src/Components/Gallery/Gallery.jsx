import React, { useState, useEffect } from "react";
import s from "./Gallery.module.css";
import { getCategories } from "../Api";

const Gallery = ({ onChoseCategory }) => {
  const [galleryArr, setGalleryArr] = useState([]);
  const [status, setStatus] = useState("idle");
  //   const [changedCategory, setChangedCategory] = useState("");

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

  //   function onChoseCategory(e) {
  //     console.log(e.currentTarget.innerHTML);
  //     setChangedCategory(e.target.innerHTML);
  //   }

  return (
    <div className="container galleryContainer">
      <h2 className={s.galleryTitle}>Categories</h2>
      <ul className={s.categoriesList}>
        {galleryArr.map((c) => {
          return (
            <li key={c} className={s.categoriesListItem}>
              <div className={s.categoryButton} onClick={onChoseCategory}>
                <p className={s.categoryButtonText}>{c}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Gallery;
