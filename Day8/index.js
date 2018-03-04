const boxes = document.querySelectorAll('input');
function shiftPress(event) {
  if (event.key === 'Shift') {
    for (let i = start; i < end; i++) {
      if (!boxes[i].checked) boxes[i].checked = true;
    }
  }
}

window.addEventListener('keydown', shiftPress);
boxes.forEach((el) => {
  el.addEventListener('change', start);
});
