import React, { memo } from 'react';

import Player from '../../models/Player';

const Score = memo(({ player, score }) => (
  <div className="score">
    <h1>{player}</h1>
    <h2>{score}</h2>
  </div>
));

const Container = ({
  score: {
    [Player.CIRCLE]: playerO,
    [Player.CROSS]: playerX,
    [Player.TIE]: tie
  }
}) => (
  <section id="score" className="game__score">
    <Score player="Jogador X" score={playerX} />
    <Score player="Empate" score={tie} />
    <Score player="Jogador O" score={playerO} />
  </section>
);

export default Container;
