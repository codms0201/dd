const wordList = document.getElementById('wordList');

function addWord() {
    const wordInput = document.getElementById('word');
    const word = wordInput.value.trim();

    if (word !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = word;
        const editButton = createButton('Edit', () => editWord(listItem));
        const deleteButton = createButton('Delete', () => deleteWord(listItem));
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        wordList.appendChild(listItem);
        wordInput.value = '';
    }
}

function createButton(text, onClick) {
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', onClick);
    return button;
}

function editWord(listItem) {
    const editedWord = prompt('Edit the word:', listItem.textContent);
    if (editedWord !== null) {
        listItem.textContent = editedWord;
    }
}

function deleteWord(listItem) {
    listItem.remove();
}
