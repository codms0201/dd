// editFunction.js

function editWord() {
    let keyword = prompt("수정할 단어를 입력하세요:");

    // Validate the keyword
    if (!validateInput(keyword)) {
        console.log("유효하지 않은 키워드입니다.");
        return;
    }

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

    // Validate the new meaning
    if (!validateInput(newMeaning)) {
        console.log("유효하지 않은 뜻입니다.");
        return;
    }

    wordList[matchingWords[selectedWordIndex].index].meaning = newMeaning;

    console.log("단어가 수정되었습니다.");
}
