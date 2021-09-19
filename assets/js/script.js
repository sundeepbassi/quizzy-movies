/*jshint esversion: 6 */  /*jshint -W008 */   


/* Setting up the script file  with content variables and all functions for the quiz code is accredited to Web Dev Simplified*/



const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');

const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

/* The 3 let statements below are accredited to Keith Paterson Make a simple quiz webpage*/

let userName = document.querySelector("#userName");
let headerText = document.querySelector("#headerText");
let greetingInput = document.querySelector("#greetingInput");

/* The function greeting and the greetingInput below are accredited to Keith Paterson Make a simple quiz webpage*/

function greeting() {
  
  headerText.innerHTML = "";
  headerText.innerHTML = "Hello " + userName.value + ", welcome and we hope you enjoy the quiz.";
  greetingInput.style.display = "none";
}

function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;            
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
   showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('btn');
      if (answer.correct) {
          button.dataset.correct = answer.correct;
      }
      button.addEventListener('click', selectAnswer);
      answerButtonsElement.appendChild(button);
  });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild);
    }
}



function selectAnswer(e) {
const selectedButton = e.target;
const correct = selectedButton.dataset.correct;
setStatusClass(document.body,correct);
Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button,button.dataset.correct);
});
if (shuffledQuestions.length > currentQuestionIndex + 1) {
nextButton.classList.remove('hide');
} else {
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide');
}
}


function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}


function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [
  {
   question: 'In which movie was there terror lurking in water?',
   answers: [
     { text: 'Finding Nemo', correct: false},
     { text: 'Jumanji', correct: false},
     { text: 'Aliens', correct: false},
     { text: 'Jaws', correct: true}
   ]
  
  },
  
  {
  question: 'Which actor refused to accept an Oscars?',
    answers: [
      { text: 'Ronald Reagan', correct: false},
      { text: 'Brad Pitt', correct: false},
      { text: 'Marlon Brando', correct: true},
      { text: 'Kevin Costner', correct: false}
    ]
},

{
    question: 'Which is the highest grossing movie of all time?',
      answers: [
        { text: 'Avatar', correct: true},
        { text: 'Superman', correct: false},
        { text: 'The Grinch', correct: false},
        { text: 'ET', correct: false}
      ]
  },

  {
    question: 'Which movie was based on a TV sitcom?',
      answers: [
        { text: 'Frozen', correct: false},
        { text: 'Bewitched', correct: true},
        { text: 'Wizard Of OZ', correct: false},
        { text: 'Legally Blonde', correct: false}
      ]
  },

  {
    question: 'What is Bohemian Rhapsody about?',
      answers: [
        { text: 'A Famous Animation', correct: false},
        { text: 'Story About Gangs', correct: false},
        { text: 'The Monarchy', correct: false},
        { text: 'Freddy Mercury', correct: true}
      ]
  }

];


