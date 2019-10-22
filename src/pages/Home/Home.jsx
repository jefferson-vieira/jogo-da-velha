import React from 'react';

import Players from './Players';
import Play from './Play';

const Home = () => (
  <section id="home" className="home">
    <h1>Jogo da Velha</h1>
    <Players />
    <Play />
  </section>
);

export default Home;
