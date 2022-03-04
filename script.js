const textInput = document.querySelector('#text-input');
textInput.addEventListener('keyup', () => {
  document.querySelector('#meme-text').innerText = textInput.value;
});
