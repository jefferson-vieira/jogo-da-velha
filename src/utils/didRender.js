export default function didRender(fn) {
  setImmediate(fn);
}
