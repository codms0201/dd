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

  displayAllWords();  // 단어 추가 후 목록 표시

  return true;
}

function displayAllWords() {
  let wordListDiv = document.getElementById('wordList');
  wordListDiv.innerHTML = '';  // 기존 내용 비우기

  // 단어 목록 표시
  for (let i = 0; i < wordList.length; i++) {
    let wordInfo = document.createElement('p');
    wordInfo.textContent = `${i + 1}. Level ${wordList[i].level}: ${wordList[i].word} - ${wordList[i].meaning}`;
    wordListDiv.appendChild(wordInfo);
  }
}

// 예시로 단어 목록을 초기화합니다.
wordList.push({ level: 1, word: "사과", meaning: "과일" });
wordList.push({ level: 2, word: "바나나", meaning: "노란 과일" });
