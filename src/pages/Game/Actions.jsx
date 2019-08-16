import React, { memo } from 'react';

const Actions = ({ reset, restart }) => (
  <section id="actions" className="game__actions">
    <button
      type="button"
      className="btn btn--primary"
      title="Nova partida"
      onClick={restart}
    >
      Recomeçar
    </button>
    <button
      type="button"
      className="btn btn--secondary"
      title="Zerar pontuação"
      onClick={reset}
    >
      Redefinir
    </button>
  </section>
);

export default memo(Actions, () => true);
