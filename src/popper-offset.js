function use(offsetEl) {
  let el = document.body;

  if (typeof offsetEl === 'string') {
    el = document.querySelector(offsetEl);
  } else if (offsetEl instanceof Element) {
    el = offsetEl;
  }

  window.offsetEl = el;
}

export default { use };
