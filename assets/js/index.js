const startBtn = document.querySelector('.start');
const resetBtn = document.querySelector('.reset');
let questionText = document.querySelector('.question');
let input = document.querySelector('#input');
let results = document.querySelector('.results');
let win = document.querySelector('.win');
let lose = document.querySelector('.lose');
const timer = document.querySelector('.timer');
const sec = timer.querySelector('.sec');

const questions = ['dog', 'cat', 'Birds'];
let winPoints = 0;
let losePoints = 0;
let word = '';

function startApp() {
  //start btn
  startBtn.addEventListener('click', function () {
    console.log('working');

    //add html to quuestion div
    questionText.textContent = questions[0];
  });

  //reset btn
  resetBtn.addEventListener('click', function () {
    console.log('reset');
    input.value = '';

    startApp();
  });
}

//loop thruu the question
function displayQuestion() {
  for (let i = 0; i < questions.length; i++) {
    return questions[i];
  }
  //add score to winner
  if (word === questions[0]) {
    results.textContent = 'you won 1';
    win.textContent = winPoints++;
    startApp();
  } else {
    results.textContent = 'you lost';
    losePoints++;
    lose.textContent = losePoints++;
    startApp();
  }
}

//listen keyboard input
//check the usuer input to see if it is matching the random word

input.addEventListener('keydown', function (e) {
  let userAnswer = e.key;
  word = word.concat(userAnswer);
  console.log(word);
});

//add score to lose

//create timer / countdown

//if timer runs out game end

function init() {
  startApp();
}

init();
