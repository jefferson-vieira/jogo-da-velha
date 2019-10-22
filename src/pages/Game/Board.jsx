import React, { Component } from 'react';

import { ComputerContext } from 'store';

import { didRender, executionTimeAtLeast } from 'utils';

import { tie as tieModal, win as winModal } from 'components/modals';

import minmax from 'helpers/computer';
import { changeTurn, getWinnerCombos, checkTie } from 'helpers/game';

import Player from 'models/Player';

import Field from './Field';

const initialState = {
  board: Array(9).fill(null),
  computer: Player.CIRCLE,
  player: Player.CROSS,
  turn: Player.CROSS,
  loading: false,
  winner: null,
  end: false
};

class Board extends Component {
  static contextType = ComputerContext;

  state = initialState;

  shouldComponentUpdate(_, nextState) {
    return !nextState.loading;
  }

  restart = () => {
    this.setState(initialState);
  };

  checkTie = (board, turn) => {
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

    this.setState({ turn: changeTurn(turn) });
  };

  checkWin = (board, turn) => {
    const winnerCombos = getWinnerCombos(board);

    if (winnerCombos.length) {
      const { addScore } = this.props;

      winModal(turn, this.restart);

      this.setState({
        end: true,
        loading: false,
        winner: { turn, combo: winnerCombos.flat() }
      });

      addScore(turn);

      return;
    }

    this.checkTie(board, turn);
  };

  move = position => {
    const { board, turn } = this.state;

    const newBoard = Object.assign([...board], { [position]: turn });

    this.setState({ board: newBoard });

    this.checkWin(newBoard, turn);
  };

  computerTurn = () => {
    const { board, computer, turn } = this.state;
    const { position } = minmax(board, computer, turn);
    this.move(position);
  };

  checkComputer = async () => {
    const { isComputerActive } = this.context;

    if (isComputerActive) {
      this.setState({ loading: true });
      await executionTimeAtLeast(this.computerTurn, 500);
      this.setState({ loading: false });
    }
  };

  playerTurn = async position => {
    this.move(position);

    didRender(this.checkComputer);
  };

  renderBoard = () => {
    const { board, winner, end } = this.state;

    return board.map((field, index) => (
      <Field
        // eslint-disable-next-line
        key={index}
        id={index}
        type={field}
        end={end}
        win={winner && winner.combo.includes(index)}
        onClick={field || end ? undefined : () => this.playerTurn(index)}
      />
    ));
  };

  render() {
    return (
      <>
        <main id="board" className="game__board">
          {this.renderBoard()}
        </main>
      </>
    );
  }
}

export default Board;
