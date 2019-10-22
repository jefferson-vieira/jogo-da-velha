export default function executionTimeAtLeast(fn, duration, ...args) {
  return new Promise(resolve => {
    setTimeout(resolve, duration);
    fn(...args);
  });
}
