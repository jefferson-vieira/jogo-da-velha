import React, { Component, createRef } from 'react';

import Modal from 'configs/swal';

import Actions from './Actions';
import Board from './Board';
import Score from './Score';

import Player from './Player';

const initialState = {
  score: {
    [Player.CIRCLE]: 0,
    [Player.CROSS]: 0,
    [Player.TIE]: 0
  }
};

class Game extends Component {
  state = initialState;

  board = createRef();

  addScore = player => {
    const {
      score: { [player]: playerScore, ...score }
    } = this.state;

    this.setState({ score: { ...score, [player]: playerScore + 1 } });
  };

  restart = () => {
    this.board.current.restart();
  };

  reset = () => {
    Modal.fire({
      type: 'question',
      title: 'Espera...',
      text: 'Quer mesmo redefinir a pontuação?',
      confirmButtonText: 'Quero!',
      cancelButtonText: 'Ops...'
    }).then(result => {
      if (result.value) {
        this.restart();
        this.setState(initialState);
      }
    });
  };

  render() {
    const { score } = this.state;

    return (
      <section id="game" className="game">
        <Score score={score} />
        <Board ref={this.board} addScore={this.addScore} />
        <Actions restart={this.restart} reset={this.reset} />
      </section>
    );
  }
}

export default Game;
