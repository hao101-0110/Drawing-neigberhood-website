
const container = document.getElementById('neighborhood');
const saved = JSON.parse(localStorage.getItem('buildings') || '[]');
const slots = document.querySelectorAll('.slot');

saved.forEach((dataUrl, i) => {
  if (i < slots.length) {
    const img = document.createElement('img');
    img.src = dataUrl;
    slots[i].appendChild(img);
  }
});

document.getElementById('addBuilding').onclick = () => {
  window.location.href = 'index.html';
};
