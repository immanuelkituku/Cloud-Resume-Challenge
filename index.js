// Simple visitor counter using localStorage
let count = localStorage.getItem('visitorCount') || 0;
count++;
localStorage.setItem('visitorCount', count);
document.getElementById('visitor-count').textContent = `${count}`;
