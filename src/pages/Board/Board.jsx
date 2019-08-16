import React, { Component } from 'react';

import Modal from 'configs/swal';
import { equals } from 'utils';

import Field from './Field';

import Player from './Player';

const initialState = {
  // prettier-ignore
  board: [
    '', '', '',
    '', '', '',
    '', '', ''
  ],
  // prettier-ignore
  combos: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ],
  player: Player.CROSS,
  winner: null,
  end: false
};

class Board extends Component {
  state = initialState;

  restart = () => {
    this.setState(initialState);
  };

  checkEnd = board => {
    if (!board.some(field => !field)) {
      const { addScore } = this.props;

      this.setState({
        end: true
      });

      Modal.fire('Empate!').then(result => result.value && this.restart());

      addScore(Player.TIE);
    }
  };

  checkWin = (board, player) => {
    const { combos } = this.state;

    const winnerCombos = combos.filter(combo =>
      equals(...combo.map(c => board[c]))
    );

    if (winnerCombos.length) {
      const { addScore } = this.props;

      Modal.fire(`O jogador ${player} venceu!`).then(
        result => result.value && this.restart()
      );

      this.setState({
        end: true,
        winner: { player, combo: winnerCombos.flat() }
      });

      addScore(player);

      return;
    }

    this.checkEnd(board);
  };

  move = position => {
    const { board, player } = this.state;

    const newBoard = [...board];
    newBoard[position] = player;

    this.setState({
      board: newBoard,
      player: player === Player.CROSS ? Player.CIRCLE : Player.CROSS
    });

    this.checkWin(newBoard, player);
  };

  renderBoard = () => {
    const { board, winner, end } = this.state;

    return board.map((field, index) => (
      <Field
        key={index}
        id={index}
        type={field}
        end={end}
        win={winner && winner.combo.includes(index)}
        onClick={field || winner ? undefined : () => this.move(index)}
      />
    ));
  };

  render() {
    return (
      <main id="board" className="board">
        {this.renderBoard()}
      </main>
    );
  }
}

export default Board;
