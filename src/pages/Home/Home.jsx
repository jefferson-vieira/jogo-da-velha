import React, { Component } from 'react';

import { normalizeBoolean } from 'utils';

import Players from './Players';
import Play from './Play';

class Menu extends Component {
  state = {
    isCPUActive: true
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: normalizeBoolean(value) });
  };

  render() {
    const { isCPUActive } = this.state;

    return (
      <section id="home" className="home">
        <h1>Jogo da Velha</h1>
        <Players
          isCPUActive={isCPUActive}
          onChangePlayers={this.handleChange}
        />
        <Play isCPUActive={isCPUActive} />
      </section>
    );
  }
}

export default Menu;
