import React, { Component } from 'react';

import { didRender, executionTimeAtLeast } from 'utils';

import { tie as tieModal, win as winModal } from 'components/modals';

import minmax from 'helpers/computer';
import { changeTurn, getWinnerCombos, checkTie } from 'helpers/game';

import Player from 'models/Player';

import Field from './Field';

const initialState = {
  // prettier-ignore
  board: [
    '', '', '',
    '', '', '',
    '', '', ''
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

  checkTie = (board, player) => {
    if (checkTie(board)) {
      const { addScore } = this.props;

      this.setState({
        end: true,
        loading: false
      });

      tieModal(this.restart);

      addScore(Player.TIE);

      return;
    }

    this.setState({ player: changeTurn(player) });
  };

  checkWin = (board, player) => {
    const winnerCombos = getWinnerCombos(board);

    if (winnerCombos.length) {
      const { addScore } = this.props;

      winModal(player, this.restart);

      this.setState({
        end: true,
        loading: false,
        winner: { player, combo: winnerCombos.flat() }
      });

      addScore(player);

      return;
    }

    this.checkTie(board, player);
  };

  move = position => {
    const { board, player } = this.state;

    const newBoard = Object.assign([...board], { [position]: player });

    this.setState({
      board: newBoard
    });

    this.checkWin(newBoard, player);
  };

  computerTurn = async () => {
    const { end } = this.state;
    if (end) return;

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
