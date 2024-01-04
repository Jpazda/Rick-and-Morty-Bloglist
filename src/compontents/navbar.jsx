import React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-between">
      <div className="container-fluid px-4">
        <h3>Rick and Morty</h3>

        <div className="favorites">
          <h4>
            Favorites <i className="fa-regular fa-star"></i>
          </h4>
        </div>
      </div>
    </nav>
  );
};
