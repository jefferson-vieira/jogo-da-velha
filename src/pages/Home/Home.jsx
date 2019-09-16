import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { normalizeBoolean } from 'utils';

import Players from './Players';

class Menu extends Component {
  state = {
    cpu: true
  };

  handlePlayers = e => {
    const { value } = e.target;

    this.setState({ cpu: normalizeBoolean(value) });
  };

  render() {
    const { cpu } = this.state;

    return (
      <section id="home" className="home">
        <h1>Jogo da Velha</h1>
        <Players isCPUActive={cpu} onChangePlayers={this.handlePlayers} />
        <Link
          to={{ pathname: '/game', state: { cpu } }}
          className="home__play"
          title="Novo jogo"
        >
          Jogar
        </Link>
      </section>
    );
  }
}

export default Menu;
