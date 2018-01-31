const colorPick = document.getElementById('color-picker');
const blurPick = document.getElementById('blur-picker');
const spacePick = document.getElementById('space-picker');


colorPick.addEventListener('change', () => {
  const newColor = colorPick.value;
  document.documentElement.style.setProperty('--main', newColor);
});

blurPick.addEventListener('mousemove', () => {
  const newVal = blurPick.value;
  document.documentElement.style.setProperty('--blur', `blur(${newVal}px)`);
});

spacePick.addEventListener('mousemove', () => {
  const newVal = spacePick.value;
  document.documentElement.style.setProperty('--space', newVal + '%');
});


// can use this in helper for eventlistener and it refers to element
// how did I not know what data-var is in html'
