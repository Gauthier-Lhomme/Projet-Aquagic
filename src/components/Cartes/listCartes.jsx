import React from "react";
import { withRouter } from "react-router-dom";
import { Name } from "./Cartes.style";

const ListCartes = ({ name, imageUrl, manaCost, text, history, cmc, type, rarity, artist, col, number }) => {
  const handleClick = () => {
    history.push(`/card/${name}`, {
      name,
      imageUrl,
      manaCost,
      text,
      cmc,
      type,
      rarity,
      artist,
    });
  };

  return (
    <div>
      <Name onClick={handleClick} style={{ color: `${col}` }}>
        {number}~{name}
      </Name>
    </div>
  );
};
export default withRouter(ListCartes);
