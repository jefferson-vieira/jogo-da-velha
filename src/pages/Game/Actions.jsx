import React, { memo } from 'react';

const Actions = ({ exit, reset, restart }) => (
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
    <button
      type="button"
      className="btn btn--secondary"
      title="Voltar ao início"
      onClick={exit}
    >
      Sair
    </button>
  </section>
);

export default memo(Actions, () => true);
