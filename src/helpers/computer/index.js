export default function minmax(board) {
  const emptyFields = board.map((v, i) => !v && i).filter(Boolean);

  const position = Math.floor(Math.random() * emptyFields.length);

  return emptyFields[position];
}
