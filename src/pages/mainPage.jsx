import React, { useContext, useEffect } from "react";
import "./mainPage.css";
import { CharacterCard } from "../compontents/characterCard";
import { LocationCard } from "../compontents/locationCard";
import { DataContext, DataProvider } from "../context/DataContext";

export const MainPage = () => {
  const { characters, locations, favorites } = useContext(DataContext);

  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  return (
    <DataProvider>
      <div className="main-page">
        <h1 className="title">Characters</h1>
        <div className="characters">
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              name={character.name}
              location={character.location.name}
              image={character.image}
              id={character.id}
            />
          ))}
        </div>
        <h1 className="title">Locations</h1>
        <div className="characters">
          {locations.map((location) => (
            <LocationCard
              key={location.id}
              name={location.name}
              type={location.type}
              // Assuming you have an image URL for locations
              image={location.imageUrl}
            />
          ))}
        </div>
      </div>
    </DataProvider>
  );
};
