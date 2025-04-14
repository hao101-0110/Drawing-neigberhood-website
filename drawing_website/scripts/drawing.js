
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let painting = false;
let currentColor = 'black';

canvas.addEventListener('pointerdown', (e) => { painting = true; draw(e); });
canvas.addEventListener('pointerup', () => painting = false);
canvas.addEventListener('pointerout', () => painting = false);
canvas.addEventListener('pointermove', draw);

function draw(e) {
  if (!painting) return;
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.strokeStyle = currentColor;
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
}

document.querySelectorAll('.color').forEach(btn => {
  btn.addEventListener('click', () => {
    currentColor = btn.getAttribute('data-color');
  });
});
document.getElementById('eraser').onclick = () => {
  currentColor = 'white';
};
document.getElementById('save').onclick = () => {
  const dataUrl = canvas.toDataURL();
  let saved = JSON.parse(localStorage.getItem('buildings') || '[]');
  if (saved.length >= 6) saved.shift();
  saved.push(dataUrl);
  localStorage.setItem('buildings', JSON.stringify(saved));
  alert('Saved!');
};
document.getElementById('toNeighborhood').onclick = () => {
  window.location.href = 'neighborhood.html';
};
