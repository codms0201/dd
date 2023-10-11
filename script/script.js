function addWord() {
    const wordInput = document.getElementById('word');
    const word = wordInput.value.trim();

    if (word !== '') {
        const wordList = document.getElementById('wordList');
        const listItem = document.createElement('li');
        listItem.textContent = word;
        wordList.appendChild(listItem);
        wordInput.value = '';
    }
}