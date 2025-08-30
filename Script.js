const emojis = ['💛', '🍮', '🍫', '🍓'];

setInterval(() => {
  const emoji = document.createElement('div');
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.classList.add('emoji-caindo');
  emoji.style.left = Math.random() * window.innerWidth + 'px';
  document.body.appendChild(emoji);

  setTimeout(() => emoji.remove(), 5000);
}, 500);
