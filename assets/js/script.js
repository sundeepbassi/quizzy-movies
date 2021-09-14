const container = document.querySelector('.container');
const welcomeBox = document.querySelector('.welcome');
const buttonStart = document.querySelector('.buttonStart');
const questionParagraph = document.querySelector('.question');
const answersContainer = document.querySelector('.answers');
const answers = document.querySelectorAll('answer');
const scoreSpan = document.querySelector('#score');
const buttonNext = document.querySelector('.button__next');

const questions = [
    {question:'Which is the highest grossing movie of all time ?',
      answers: [{text:'Dracula', isAnswer:false}, {text:'Avatar', isAnswer:true}, {text:'Superman', isAnswer:false}, {text:'Spiderman', isAnswer:false}]
},
    {question:'In which movie did an actor refuse an Oscars award ?',
     answers: [{text:'Seven', isAnswer:false}, {text:'Goodfellas', isAnswer:false}, {text:'Godfather', isAnswer:true}, {text:'Alien', isAnswer:false}]
},
    {question:'Which movie was originally a television sitcom ?',
      answers: [{text:'maleficent', isAnswer:false}, {text:'Bewitched', isAnswer:true}, {text:'Hook', isAnswer:false}, {text:'JumanJi', isAnswer:false}]
},
    {question:'Which movie was a true story?',
     answers: [{text:'Misery', isAnswer:false}, {text:'Madman', isAnswer:false}, {text:'Titanic', isAnswer:true}, {text:'Batman', isAnswer:false}]
},
    {question:'In which movie did the animals return to the wild ?',
     answers: [{text:'Madagascar', isAnswer:true}, {text:'Ratatouille', isAnswer:false}, {text:'Jaws', isAnswer:false}, {text:'Deliverance', isAnswer:false}]
}

];

let firstQuestion = Math.floor(Math.random() * 5);
nextQuestion = firstQuestion;
let score = 0;

buttonStart.addEventListener('click', ()=> {
    welcomeBox.style.display = 'none';
    container.style.display= 'grid';
    oneQuestion(firstQuestion);
});

const oneQuestion = (index) => {
    const question = questions[firstQuestion];
    questionParagraph.textcontent = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.classList.add('.answer__button');
        button.append(answer.text);
        answersContainer.appendChild(button);
        button.dataset.isCorrect =answer.isAnswer;
        button.addEventListener('click', checkAnswer);


    });
};

const checkAnswer = (e) => {
   const allAnswers = document.querySelectorAll('.answer__button');
   const answerBoolean = e.target.dataset.isCorrect;
   if (answerBoolean == 'true') {
    e.target.classList.add('valid');
    score ++;
    scoreSpan.textContent = score;
   } 

   else {
       e.target.classList.add('invalid');
   }

allAnswers.forEach(e1 => {
       el.disabled = true;
});

buttonNext.addEventListener('click', () => {
    nextQuestion --;
    if (nextQuestion < 0) {
        nextQuestion = questions.length + nextQuestion
    };

    if (firstQuestion === nextQuestion) {
        questionParagraph.textContent = 'Quiz Complete!';
        buttonNext.style.display = 'none';
        answersContainer.style.display = 'none';
        return;

    }

   
    questionParagraph.textContent = '';
    answersContainer.textContent = '';
    oneQuestion(nextQuestion);
});