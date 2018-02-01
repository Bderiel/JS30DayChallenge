const panels = document.querySelectorAll('.panels');
console.log(panels);

function open() {
  this.classList.toggle('open');
  this.classList.toggle('open-active');
}


panels.forEach((el) => {
  el.addEventListener('click', open);
})
;