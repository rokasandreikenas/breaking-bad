import React from "react";
import CharacterItem from "./CharactersItem";
import Spinner from "../ui/Spinner";

const CharactersGrid = ({ isLoading, items }) => {
  const renderItems = items.map((item, index) => {
    return <CharacterItem key={index} item={item} />;
  });

  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">{renderItems}</section>
  );
};

export default CharactersGrid;
