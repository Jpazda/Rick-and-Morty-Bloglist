import React from "react";
import { Card } from "../compontents/card";
import "./mainPage.css";

export const MainPage = () => {
  return (
    <div className="main-page">
      <button className="button">Generate Random Player</button>
      <Card />
    </div>
  );
};
