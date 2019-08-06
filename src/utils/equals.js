export default function equals(...values) {
  if (values.some(value => !value)) return false;
  return new Set(values).size === 1;
}
