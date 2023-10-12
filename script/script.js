let wordList = [];

function validateForm() {
    let level = document.getElementById("level").value;
    let word = document.getElementById("word").value;
    let meaning = document.getElementById("meaning").value;

    if (!level || !word || !meaning) {
        alert("모든 필드를 채워주세요.");
        return false;
    }

    let newWord = { level: level, word: word, meaning: meaning };
    wordList.push(newWord);
    alert("새 단어가 단어장에 추가되었습니다.");
}

// Rest of the functions (editWord, deleteWord, displayAllWords) remain unchanged.

// 예시로 단어 목록을 초기화합니다.
wordList.push({ level: 1, word: "Apple", meaning: "A fruit" });
wordList.push({ level: 2, word: "Banana", meaning: "A yellow fruit" });
