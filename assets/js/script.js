const container = document.querySelector('.container')
const welcomeBox = document.querySelector('.welcome')
const buttonStart = document.querySelector('.buttonStart')
const questionParagraph = document.querySelector('.question')
const answersContainer = document.querySelector('.answers')
const answers = document.querySelectorAll('answer')
const scoreSpan = document.querySelector('#score')
const buttonNext = document.querySelector('.button__next')

const questions = [
    {question:'Which is the highest grossing movie of all time ?',
      answers: [{text:'', isAnswer:false}, {text:'', isAnswer:false}, {text:'', isAnswer:false}, {text:'', isAnswer:false}]
},
    {question:'Which is the highest grossing movie of all time ?',
     answers: [{text:'', isAnswer:false}, {text:'', isAnswer:false}, {text:'', isAnswer:false}, {text:'', isAnswer:false}]
},
    {question:'Which is the highest grossing movie of all time ?',
      answers: [{text:'', isAnswer:false}, {text:'', isAnswer:false}, {text:'', isAnswer:false}, {text:'', isAnswer:false}]
},
    {question:'Which is the highest grossing movie of all time ?',
     answers: [{text:'', isAnswer:false}, {text:'', isAnswer:false}, {text:'', isAnswer:false}, {text:'', isAnswer:false}]
},
    {question:'Which is the highest grossing movie of all time ?',
     answers: [{text:'', isAnswer:false}, {text:'', isAnswer:false}, {text:'', isAnswer:false}, {text:'', isAnswer:false}]
}

]

let firstQuestion = 0
let score = 0

buttonStart.addEventListener('click', ()=> {
    welcomeBox.style.display = 'none'
    container.style.display= 'grid'
    oneQuestion(firstQuestion)
})

const oneQuestion = (index) => {
    const question = questions[firstQuestion]
    questionParagraph.textcontent = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.classList.add('answer__button')
        button.append(answer.text)
        answersContainer.appendChild(button)
        button.dataset.isCorrect =answer.isAnswer
        button.addEventListener('click', checkAnswer)


    })
}

const checkAnswer = (e) => {
   const allAnswers = document.querySelectorAll('.answer__button')
   const answerBoolean = e.target.dataset.isCorrect
   if (answerBoolean == 'true') {
    e.target.classList.add('valid')
    score ++
    scoreSpan.textContent = score
   } else {
       e.target.classList.add(invalid)
   }




}