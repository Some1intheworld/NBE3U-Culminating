const cursor = document.querySelector('.custom-cursor');
const cursorDot = document.querySelector('.cursorDot');

document.addEventListener('mouseenter', () => {
  cursor.style.display = 'block';
  cursorDot.style.display = 'block';
})

document.addEventListener('mouseleave', () => {
  cursor.style.display = 'none';
  cursorDot.style.display = 'none';
})

document.addEventListener('mousemove', (event) => {
  cursor.style.top = `${event.clientY - 10}px`;
  cursor.style.left = `${event.clientX - 10}px`;
})

document.addEventListener('mousedown', () => {
  cursorDot.style.transform = 'scale(1.6)';
})

document.addEventListener('mouseup', () => {
  cursorDot.style.transform = 'scale(1)';
})