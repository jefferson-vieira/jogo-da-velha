import React, { Component } from 'react';

import Cell from './Cell'

class Board extends Component {
  render() {
    return (
      <main className="board">
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </main>
    );
  }
}

export default Board;
