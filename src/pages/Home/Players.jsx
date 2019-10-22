import React from 'react';

import { ComputerContext } from 'store';

import Radio from 'components/Radio';

const Players = () => (
  <ComputerContext.Consumer>
    {({ isComputerActive, toggleComputerActive }) => (
      <div className="home__players">
        <h3>Número de jogadores:</h3>
        <div className="home__players__actions">
          <Radio
            id="radio-is-cpu-active-0"
            name="isComputerActive"
            checked={isComputerActive}
            label="1 Jogador"
            title="Jogue contra a máquina"
            value="true"
            onChange={toggleComputerActive}
          />
          <Radio
            id="radio-is-cpu-active-1"
            name="isComputerActive"
            checked={!isComputerActive}
            label="2 Jogadores"
            title="Jogue contra um amigo"
            value="false"
            onChange={toggleComputerActive}
          />
        </div>
        <p>
          {isComputerActive
            ? 'Prove suas habilidades contra uma IA imbatível!'
            : 'Um duelo entre amigos... Quem se dará melhor?'}
        </p>
      </div>
    )}
  </ComputerContext.Consumer>
);

export default Players;
