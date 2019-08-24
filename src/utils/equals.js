export default function equals(...values) {
  return values.every(Boolean) && new Set(values).size === 1;
}
