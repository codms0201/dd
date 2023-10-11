const words = [];

function renderWordList() {
  const wordList = document.getElementById('words');
  wordList.innerHTML = '';

  for (let i = 0; i < words.length; i++) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      ${words[i]}
      <button onclick="deleteWord(${i})">삭제</button>
    `;
    wordList.appendChild(listItem);
  }
}

function addWord() {
  const wordInput = document.getElementById('wordInput');
  const word = wordInput.value.trim();

  if (word !== '') {
    words.push(word);
    wordInput.value = '';
    renderWordList();
  }
}

function deleteWord(index) {
  words.splice(index, 1);
  renderWordList();
}

document.addEventListener('DOMContentLoaded', () => {
  renderWordList();
});
