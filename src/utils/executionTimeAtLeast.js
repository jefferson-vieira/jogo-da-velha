export default function executionTimeAtLeast(cb, duration, ...args) {
  const until = new Promise(resolve => setTimeout(resolve, duration));
  cb(...args);
  return until;
}
