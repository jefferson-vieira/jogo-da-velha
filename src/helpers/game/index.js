import { equals } from 'utils';

import Player from 'models/Player';

const combos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function matchCombosToBoard(board, strategy) {
  return combos[strategy](combo => equals(...combo.map(c => board[c])));
}

export function checkWin(board) {
  return matchCombosToBoard(board, 'some');
}

export function getWinnerCombos(board) {
  return matchCombosToBoard(board, 'filter');
}

export function checkTie(board) {
  return board.every(Boolean);
}

export function changeTurn(player) {
  return player === Player.CIRCLE ? Player.CROSS : Player.CIRCLE;
}
