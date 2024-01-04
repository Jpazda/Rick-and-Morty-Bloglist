import React, { useState, useEffect } from "react";
import "./cards.css";

export const LocationCard = (props) => {
  const { name, type } = props;

  return (
    <div className="card">
      <img
        src="https://static.wikia.nocookie.net/rickandmorty/images/9/98/S2e3_mount_morty_and_summer.png/revision/latest?cb=20160923231412"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body d-flex flex-column justify-content-center align-items-center">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Type: {type}</p>
        <i className="fa-solid fa-star favorite-button"></i>
      </div>
    </div>
  );
};
