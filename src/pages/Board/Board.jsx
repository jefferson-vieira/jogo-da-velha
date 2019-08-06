import React, { Component } from 'react';

import { deepCopy, equals } from 'utils';

import Field from './Field';

import Player from './Player';

class Board extends Component {
  state = {
    // prettier-ignore
    board: [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ],
    player: Player.CROSS,
    winner: null
  };

  move = (i, j) => {
    const { board, player } = this.state;

    const newBoard = deepCopy(board);

    newBoard[i][j] = player;

    this.setState({
      board: newBoard,
      player: player === Player.CROSS ? Player.CIRCLE : Player.CROSS
    });

    this.checkWinner();
  };

  checkWinner = () => {
    const { board, player } = this.state;

    if (
      equals(board[0][0], board[1][1], board[2][2]) ||
      equals(board[0][2], board[1][1], board[2][0]) ||
      (() => {
        for (let i = 0; i < 3; i++) {
          if (
            equals(board[i][0], board[i][1], board[i][2]) ||
            equals(board[0][i], board[1][i], board[2][i])
          ) {
            return true;
          }
        }
        return false;
      })()
    ) {
      this.setState({ winner: player });
    }
  };

  renderBoard = () => {
    const { board } = this.state;

    return board.map((fields, i) =>
      fields.map((field, j) => (
        <Field
          key={[i, j]}
          id={[i, j]}
          type={field}
          onClick={() => this.move(i, j)}
        />
      ))
    );
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
