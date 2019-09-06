import React, { Component } from 'react';

import { didRender, equals, executionTimeAtLeast } from 'utils';

import { tie as tieModal, win as winModal } from 'components/modals';

import minmax from 'helpers/computer';

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
  loading: false,
  winner: null,
  end: false
};

class Board extends Component {
  state = initialState;

  shouldComponentUpdate(_, nextState) {
    return !nextState.loading;
  }

  restart = () => {
    this.setState(initialState);
  };

  checkTie = board => {
    if (!board.some(field => !field)) {
      const { addScore } = this.props;

      this.setState({
        end: true
      });

      tieModal(this.restart);

      addScore(Player.TIE);
    }
  };

  checkWin = (board, player) => {
    const { combos } = this.state;

    const winnerCombos = combos.filter(combo => {
      return equals(...combo.map(c => board[c]));
    });

    if (winnerCombos.length) {
      const { addScore } = this.props;

      winModal(player, this.restart);

      this.setState({
        end: true,
        winner: { player, combo: winnerCombos.flat() }
      });

      addScore(player);

      return;
    }

    this.checkTie(board);
  };

  changeTurn = player => {
    return player === Player.CROSS ? Player.CIRCLE : Player.CROSS;
  };

  move = position => {
    const { board, player } = this.state;

    const newBoard = Object.assign([...board], { [position]: player });

    this.setState({
      board: newBoard,
      player: this.changeTurn(player)
    });

    this.checkWin(newBoard, player);
  };

  computerTurn = async () => {
    this.setState({ loading: true });

    await executionTimeAtLeast(() => {
      const { board, player } = this.state;

      const { position } = minmax(board, player);

      this.move(position);
    }, 500);

    this.setState({ loading: false });
  };

  playerTurn = position => {
    this.move(position);

    didRender(this.computerTurn);
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
        onClick={field || winner ? undefined : () => this.playerTurn(index)}
      />
    ));
  };

  render() {
    return (
      <main id="board" className="game__board">
        {this.renderBoard()}
      </main>
    );
  }
}

export default Board;
