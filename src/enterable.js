export function enterable(node) {
  let keycode;
  function handleEnterButtonPress(event) {
    keycode = event.key;
    if (keycode === 13) {
      node.dispatchEvent(new CustomEvent('entered', {
        detail: { pressed: true }
      }));
    }
  }

  return {
    destroy() {
      node.removeEventListener('mousedown', handleEnterButtonPress());
    }
  };
}
