import { changeTurn, checkWin } from 'helpers/game';

import Player from 'models/Player';

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

function getMoves(board, emptyPositions, player) {
  return emptyPositions.map(position => {
    const { score } = minmax(
      Object.assign([...board], { [position]: player }),
      changeTurn(player)
    );

    return { position, score };
  });
}

function minmax(board, player) {
  if (checkWin(board)) {
    return { score: player === Player.CIRCLE ? -1 : 1 };
  }

  const emptyPositions = board.flatMap((field, index) => (field ? [] : index));

  if (!emptyPositions.length) {
    return { score: 0 };
  }

  const moves = getMoves(board, emptyPositions, player);

  const nextMoves =
    player === Player.CIRCLE ? getBestMoves(moves) : getWorseMoves(moves);

  return getRandomFrom(nextMoves);
}

export default minmax;
