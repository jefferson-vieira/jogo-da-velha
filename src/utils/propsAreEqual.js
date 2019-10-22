export default function propsAreEqual(prevProps, nextProps) {
  return Object.keys(prevProps)
    .flatMap(key => {
      if (typeof prevProps[key] === 'function') return [];
      return Object.is(prevProps[key], nextProps[key]);
    })
    .every(Boolean);
}
