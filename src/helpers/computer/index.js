import { changeTurn, checkWin, checkTie } from 'helpers/game';

import { getRandomFrom } from 'utils';

function filterMoves(moves, strategy) {
  const boundary = Math[strategy](...moves.map(move => move.score));
  return moves.filter(move => move.score === boundary);
}

function getMoves(board, emptyPositions, computer, turn) {
  return emptyPositions.map(position => {
    const newBoard = Object.assign([...board], { [position]: turn });

    // eslint-disable-next-line
    const { score } = minmax(newBoard, computer, changeTurn(turn));

    return { position, score };
  });
}

function minmax(board, computer, turn) {
  const isComputerTurn = turn === computer;

  if (checkWin(board)) {
    return { score: isComputerTurn ? -1 : 1 };
  }

  if (checkTie(board)) {
    return { score: 0 };
  }

  const emptyPositions = board.flatMap((field, index) => (field ? [] : index));

  const moves = getMoves(board, emptyPositions, computer, turn);

  const possibleMoves = filterMoves(moves, isComputerTurn ? 'max' : 'min');

  return getRandomFrom(possibleMoves);
}

export default minmax;
