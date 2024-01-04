import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [locations, setLocations] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/location"
        );
        if (!response.ok) {
          throw new Error(`${response.status}`);
        }
        const data = await response.json();
        setLocations(data.results);
      } catch (error) {
        console.log("error retrieving locations", error.message);
      }
    };
    fetchLocations();
  }, []);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        if (!response.ok) {
          throw new Error(`${response.status}`);
        }
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.log("Error retrieving characters", error.message);
      }
    };
    fetchCharacters();
  }, []);

  const toggleFavorite = (itemId) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.includes(itemId);
      return isFavorite
        ? prevFavorites.filter((id) => id !== itemId)
        : [...prevFavorites, itemId];
    });
  };

  return (
    <DataContext.Provider
      value={{ characters, locations, favorites, toggleFavorite }}
    >
      {children}
    </DataContext.Provider>
  );
};
