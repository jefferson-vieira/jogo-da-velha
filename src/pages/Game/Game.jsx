import React, { Component, createRef } from 'react';

import { exit as exitModal, reset as resetModal } from 'components/modals';

import Player from 'models/Player';

import Actions from './Actions';
import Board from './Board';
import Score from './Score';

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

  exit = () => {
    const { history } = this.props;

    exitModal(() => {
      history.push('/home');
    });
  };

  restart = () => {
    this.board.current.restart();
  };

  reset = () => {
    resetModal(() => {
      this.setState(initialState);
      this.restart();
    });
  };

  addScore = player => {
    const {
      score: { [player]: playerScore, ...score }
    } = this.state;

    this.setState({ score: { ...score, [player]: playerScore + 1 } });
  };

  render() {
    const { score } = this.state;

    return (
      <section id="game" className="game">
        <Score score={score} />
        <Board ref={this.board} addScore={this.addScore} />
        <Actions exit={this.exit} restart={this.restart} reset={this.reset} />
      </section>
    );
  }
}

export default Game;
