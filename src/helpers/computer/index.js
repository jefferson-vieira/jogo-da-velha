import { changeTurn, checkWin } from 'helpers/game';

import { getRandomFrom } from 'utils';

function getWorseMoves(moves) {
  const { score: worseScore } = moves.reduce((move, nextMove) => {
    return move.score < nextMove.score ? move : nextMove;
  });

  return moves.filter(move => move.score === worseScore);
}

function getBestMoves(moves) {
  const { score: bestScore } = moves.reduce((move, nextMove) => {
    return move.score > nextMove.score ? move : nextMove;
  });

  return moves.filter(move => move.score === bestScore);
}

function getMoves(board, emptyPositions, computer, turn) {
  return emptyPositions.map(position => {
    const { score } = minmax(
      Object.assign([...board], { [position]: turn }),
      computer,
      changeTurn(turn)
    );

    return { position, score };
  });
}

function minmax(board, computer, turn) {
  if (checkWin(board)) {
    return { score: turn === computer ? -1 : 1 };
  }

  const emptyPositions = board.flatMap((field, index) => (field ? [] : index));

  if (!emptyPositions.length) {
    return { score: 0 };
  }

  const moves = getMoves(board, emptyPositions, computer, turn);

  const nextMoves =
    turn === computer ? getBestMoves(moves) : getWorseMoves(moves);

  return getRandomFrom(nextMoves);
}

export default minmax;
