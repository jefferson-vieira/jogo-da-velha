import React, { memo } from 'react';

const Score = ({ player, score }) => (
  <div className="game__score">
    <h1>{player}</h1>
    <h2>{score}</h2>
  </div>
);

export default memo(Score);
