import React, { Component } from 'react';

import Board from './Board';
import Score from './Score';

import Player from './Player';

class Game extends Component {
  state = {
    score: {
      [Player.CIRCLE]: 0,
      [Player.CROSS]: 0,
      [Player.TIE]: 0
    }
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
        <Board addScore={this.addScore} />
        <Score score={score} />
      </section>
    );
  }
}

export default Game;
