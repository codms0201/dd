// script.js

let wordList = [];

function validateInput(input) {
  return input.trim() !== '';
}

function validateForm() {
  let level = document.getElementById("level").value;
  let word = document.getElementById("word").value;
  let meaning = document.getElementById("meaning").value;

  if (!validateInput(level) || !validateInput(word) || !validateInput(meaning)) {
    alert("모든 필드를 채워주세요.");
    return false;
  }

  let newWord = { level: level, word: word, meaning: meaning };
  wordList.push(newWord);
  alert("새 단어가 단어장에 추가되었습니다.");

  return true;
}

// 수정된 editWord 함수. editFunction.js 파일과 중복 정의를 피하기 위해 이름을 변경했습니다.
function editSelectedWord() {
  let keyword = prompt("수정할 단어를 입력하세요:");
  // 나머지 코드는 기존과 동일하게 유지합니다.
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
wordList.push({ level: 1, word: "사과", meaning: "과일" });
wordList.push({ level: 2, word: "바나나", meaning: "노란 과일" });

