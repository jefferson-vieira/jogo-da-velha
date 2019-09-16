import React from 'react';

import Radio from 'components/Radio';

const Players = ({ isCPUActive, onChangePlayers }) => (
  <div className="home__players">
    <h3>Número de jogadores:</h3>
    <div className="home__players__actions">
      <Radio
        id="rbPlayers1"
        name="players"
        checked={isCPUActive}
        value="true"
        label="1 Jogador"
        title="Jogue contra a máquina"
        onChange={onChangePlayers}
      />
      <Radio
        id="rbPlayers2"
        name="players"
        checked={!isCPUActive}
        value="false"
        label="2 Jogadores"
        title="Jogue contra um amigo"
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
