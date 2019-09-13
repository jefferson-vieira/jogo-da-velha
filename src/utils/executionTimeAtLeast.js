export default function executionTimeAtLeast(cb, duration, ...args) {
  return new Promise(resolve => {
    setTimeout(resolve, duration);
    cb(...args);
  });
}
