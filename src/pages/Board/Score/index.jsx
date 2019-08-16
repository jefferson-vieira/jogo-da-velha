import React from 'react';

import Score from './Score';

import Player from '../Player';

const Container = ({
  score: {
    [Player.CIRCLE]: playerO,
    [Player.CROSS]: playerX,
    [Player.TIE]: tie
  }
}) => (
  <div id="score" className="game__score-container">
    <Score player="Jogador X" score={playerX} />
    <Score player="Empate" score={tie} />
    <Score player="Jogador O" score={playerO} />
  </div>
);

export default Container;
