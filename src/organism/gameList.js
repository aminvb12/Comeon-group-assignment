import React from "react";
import GameCard from "../components/gameCard";

import "../../lib/comeon.game-1.1.min.js";

const GameList = ({ games, openGameModal }) => {
  const play = async (game) => {
    if (window.comeon) {
      await openGameModal(game); //wait until (id=game-lunch) rendered in dom
      window.comeon.game.launch(game.code);
    }
  };
  return (
    <div
      style={{
        marginLeft: "20px",
        borderTop: "1px solid #eee",
        paddingTop: 16,
      }}
    >
      {games.map((game, _) => (
        <GameCard
          play={() => play(game)}
          key={game.id}
          name={game.name}
          description={game.description}
          code={game.code}
        />
      ))}
    </div>
  );
};

export default GameList;
