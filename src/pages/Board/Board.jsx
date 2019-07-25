import React, { Component } from 'react';

import Spot from './Spot';

class Board extends Component {
  state = {
    board: [['', 'X', ''], ['', '', 'O'], ['', '', '']]
  };

  renderBoard = () => {
    const { board } = this.state;

    return board.flat().map((type, index) => <Spot key={index} type={type} />);
  };

  render() {
    return <main className="board">{this.renderBoard()}</main>;
  }
}

export default Board;
