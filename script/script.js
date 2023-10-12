let wordList = [];

function addWord() {
    let newWord = { level: level, word: word, meaning: meaning };
    wordList.push(newWord);

    console.log("새 단어가 단어장에 추가되었습니다.");
}

function editWord() {
    let keyword = prompt("수정할 단어를 입력하세요:");
    let matchingWords = [];

    // Find words that match the keyword
    for (let i = 0; i < wordList.length; i++) {
        if (wordList[i].word.includes(keyword)) {
            matchingWords.push({ index: i, word: wordList[i] });
        }
    }

    if (matchingWords.length === 0) {
        console.log("일치하는 단어를 찾을 수 없습니다.");
        return;
    }

    console.log("일치하는 단어를 선택하세요:");
    for (let i = 0; i < matchingWords.length; i++) {
        console.log(i + 1, matchingWords[i].word.word);
    }

    let selectedWordIndex = prompt("선택할 번호를 입력하세요:") - 1;
    if (selectedWordIndex < 0 || selectedWordIndex >= matchingWords.length) {
        console.log("올바르지 않은 번호입니다.");
        return;
    }

    let newMeaning = prompt("새로운 뜻을 입력하세요:");
    wordList[matchingWords[selectedWordIndex].index].meaning = newMeaning;

    console.log("단어가 수정되었습니다.");
}

function deleteWord() {
    let keyword = prompt("삭제할 단어를 입력하세요:");

    for (let i = 0; i < wordList.length; i++) {
        if (wordList[i].word.includes(keyword)) {
            wordList.splice(i, 1);
            console.log("단어가 삭제되었습니다.");
            return;
        }
    }

    console.log("일치하는 단어를 찾을 수 없습니다.");
}

function displayAllWords() {
    console.log("전체 단어 목록:");
    for (let i = 0; i < wordList.length; i++) {
        console.log(i + 1, "-", wordList[i].level, wordList[i].word, wordList[i].meaning);
    }
}

// 예시로 단어 목록을 초기화합니다.
wordList.push({ level: 1, word: "Apple", meaning: "A fruit" });
wordList.push({ level: 2, word: "Banana", meaning: "A yellow fruit" });
