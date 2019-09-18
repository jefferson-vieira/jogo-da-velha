import React from 'react';

import Radio from 'components/Radio';

const Players = ({ isCPUActive, onChangePlayers }) => (
  <div className="home__players">
    <h3>Número de jogadores:</h3>
    <div className="home__players__actions">
      <Radio
        id="radio-is-cpu-active-0"
        name="isCPUActive"
        checked={isCPUActive}
        label="1 Jogador"
        title="Jogue contra a máquina"
        value="true"
        onChange={onChangePlayers}
      />
      <Radio
        id="radio-is-cpu-active-1"
        name="isCPUActive"
        checked={!isCPUActive}
        label="2 Jogadores"
        title="Jogue contra um amigo"
        value="false"
        onChange={onChangePlayers}
      />
    </div>
    <p>
      {isCPUActive
        ? 'Prove suas habilidades contra uma IA imbatível!'
        : 'Um duelo entre amigos... Quem se dará melhor?'}
    </p>
  </div>
);

export default Players;
