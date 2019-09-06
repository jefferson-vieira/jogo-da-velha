export default function didRender(cb) {
  requestAnimationFrame(() => requestAnimationFrame(cb));
}
