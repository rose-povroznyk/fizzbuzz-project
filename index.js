// Генерація рандомного числа
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Змінні для лічильника
let winCounter = 0;
let lossCounter = 0;

// Отримання html контенту

const fizz = document.querySelector('.fizz-btn'); //Кнопка fizz
const buzz = document.querySelector('.buzz-btn'); //Кнопка buzz
const fizzbuzz = document.querySelector('.fizzbuzz-btn'); //Кнопка buzzfizz
const next = document.querySelector('.next-btn'); //Кнопка next
const rightAsnwerImg = document.querySelector('.yes-answer-img'); //Зображення для вірної відповіді
const wrongAsnwerImg = document.querySelector('.no-answer-img'); //Зображення для невірної відповіді

const random = document.querySelector('.random-number');
random.textContent = randomNumber; //Перенеправлення рандомного числа в html

const winNumber = document.querySelector('.win');
winNumber.textContent = winCounter; //Перенеправлення лічильника вірної відповідів html

const lossNumber = document.querySelector('.loss');
lossNumber.textContent = lossCounter; //Перенеправлення лічильника невірної відповіді в html

const winAudio = new Audio('./audio/win.wav'); //Аудіо для вірної відповіді
const lossAudio = new Audio('./audio/lose.wav'); //Аудіо для невірної відповіді

// Функція для генерації і присвоєння рандомного числа елементу
function generateRandomNumber() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  random.textContent = randomNumber;
}

// Функція для генерації змін при вірній відповіді
function rightAnswer(elem) {
  rightAsnwerImg.classList.add('show');
  elem.textContent = 'Yes!';
  elem.classList.add('btn-yes');
  winNumber.textContent = ++winCounter;
  winAudio.play();
}

// Функція для генерації змін при невірній відповіді
function wrongAnswer(elem) {
  wrongAsnwerImg.classList.add('show');
  elem.textContent = 'No!';
  elem.classList.add('btn-no');
  lossNumber.textContent = ++lossCounter;
  lossAudio.play();
}

// Функція для скидання змін
function resetChanges(elem) {
  rightAsnwerImg.classList.remove('show');
  wrongAsnwerImg.classList.remove('show');
  elem.classList.remove('btn-yes');
  elem.classList.remove('btn-no');

  if (elem === fizz) {
    elem.textContent = 'Fizz';
  } else if (elem === buzz) {
    elem.textContent = 'Buzz';
  } else if (elem === fizzbuzz) {
    elem.textContent = 'FizzBuzz';
  } else {
    elem.textContent = 'Next';
  }
}

// Подія при кліку на кнопку fizz
fizz.addEventListener('click', () => {
  if (randomNumber % 3 === 0 && randomNumber % 5 === 0) {
    wrongAnswer(fizz);
  } else if (randomNumber % 3 === 0) {
    rightAnswer(fizz);
  } else {
    wrongAnswer(fizz);
  }

  setTimeout(() => {
    resetChanges(fizz);
    generateRandomNumber();
  }, 1500);
});

// Подія при кліку на кнопку buzz
buzz.addEventListener('click', () => {
  if (randomNumber % 3 === 0 && randomNumber % 5 === 0) {
    wrongAnswer(buzz);
  } else if (randomNumber % 5 === 0) {
    rightAnswer(buzz);
  } else {
    wrongAnswer(buzz);
  }

  setTimeout(() => {
    resetChanges(buzz);
    generateRandomNumber();
  }, 1500);
});

// Подія при кліку на кнопку fizzbuzz
fizzbuzz.addEventListener('click', () => {
  if (randomNumber % 3 === 0 && randomNumber % 5 === 0) {
    rightAnswer(fizzbuzz);
  } else {
    wrongAnswer(fizzbuzz);
  }

  setTimeout(() => {
    resetChanges(fizzbuzz);
    generateRandomNumber();
  }, 1500);
});

// Подія при кліку на кнопку next
next.addEventListener('click', () => {
  if (randomNumber % 3 !== 0 && randomNumber % 5 !== 0) {
    rightAnswer(next);
  } else {
    wrongAnswer(next);
  }

  setTimeout(() => {
    resetChanges(next);
    generateRandomNumber();
  }, 1500);
});
