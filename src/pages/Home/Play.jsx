import React from 'react';
import { Link } from 'react-router-dom';

const Play = () => (
  <Link to="/game" className="home__play" title="Novo jogo">
    Jogar
  </Link>
);

export default Play;
