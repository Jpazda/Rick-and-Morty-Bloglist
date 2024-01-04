import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../context/DataContext";
import "./cards.css";

export const CharacterCard = (props) => {
  const { image, name, location, id } = props;
  const { toggleFavorite, favorites } = useContext(DataContext);

  const addFavorite = () => {
    toggleFavorite(id);
  };

  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  return (
    <div className="card">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body d-flex flex-column justify-content-center align-items-center">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Location: {location}</p>
        <i
          className="fa-solid fa-star favorite-button"
          onClick={addFavorite}
        ></i>
      </div>
    </div>
  );
};
