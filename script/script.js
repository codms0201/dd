let wordList = []; // 단어 목록

function validateInput(input) {
    return input.trim() !== '';
}

function validateForm(event) {
    event.preventDefault(); // 폼 제출 기본 동작 중지

    let level = document.getElementById("level").value;
    let word = document.getElementById("word").value;
    let meaning = document.getElementById("meaning").value;

    if (!validateInput(level) || !validateInput(word) || !validateInput(meaning)) {
        alert("모든 필드를 채워주세요.");
        return false;
    }

    // 새 단어 추가
    let newWord = { level: level, word: word, meaning: meaning };
    wordList.push(newWord);

    // 단어 목록 표시
    displayAllWords();

    alert("새 단어가 단어장에 추가되었습니다.");
    return true;
}

function displayAllWords() {
    let wordListDiv = document.getElementById("wordList");
    wordListDiv.innerHTML = ''; // 기존 내용 초기화

    for (let i = 0; i < wordList.length; i++) {
        let wordItem = document.createElement('div');
        wordItem.textContent = `${i + 1}. ${wordList[i].level} - ${wordList[i].word} (${wordList[i].meaning})`;
        wordListDiv.appendChild(wordItem);
    }
}