import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const Play = ({ isCPUActive }) => (
  <Link
    to={{ pathname: '/game', state: { isCPUActive } }}
    className="home__play"
    title="Novo jogo"
  >
    Jogar
  </Link>
);

export default memo(Play);
