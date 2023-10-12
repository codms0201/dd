let wordList = []; // 단어 목록

function validateInput(input) {
    return input.trim() !== '';
}

function validateForm(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    let level = document.getElementById("level").value;
    let word = document.getElementById("word").value;
    let meaning = document.getElementById("meaning").value;

    if (!validateInput(level) || !validateInput(word) || !validateInput(meaning)) {
        alert("Please fill in all fields.");
        return false;
    }

    // Add the new word to the word list
    let newWord = { level: level, word: word, meaning: meaning };
    wordList.push(newWord);

    // Display an alert after adding the word
    alert("The word has been added!");

    // Display the updated word list
    displayAllWords();

    return true;
}

function displayAllWords() {
    let wordListDiv = document.getElementById("wordList");

    for (let i = 0; i < wordList.length; i++) {
        let wordItem = document.createElement('div');
        wordItem.textContent = `${i + 1}. ${wordList[i].level} - ${wordList[i].word} (${wordList[i].meaning})`;
        wordListDiv.appendChild(wordItem);
    }
}