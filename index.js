const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}
module.export =  startGame 

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}


const questions=[
    {question:'Javascript is an _______ language?',
    answers:[
        {text:'Object-Oriented', correct:true},
        {text:'Object-Based', correct:false},
        {text:'Procedural', correct:false},
        {text:'None of the above', correct:false}
]
    },

    {
        question:'Which of the following keywords is used to define a variable in Javascript?',
        answers:[
            {text:'var', correct:false},
            {text:'let', correct:false},
            {text:'Both', correct:true},
            {text:'None of the above', correct:false}
        ]
    },
    {
        question:'Which of the following methods is used to access HTML elements using Javascript?',
        answers:[
            {text:'getElementbyId()', correct:false},
            {text:'getElementsByClassName()', correct:false},
            {text:'Both', correct:true},
            {text:'None of the above', correct:false}
        ]
    },
    {
        question:'Upon encountering empty statements, what does the Javascript Interpreter do?',
        answers:[
            {text:'Throws an error', correct:false},
            {text:'Ignores the statements', correct:true},
            {text:'Gives a warning', correct:false},
            {text:'None of the above', correct:false}
        ]
    },
    {
        question:'Which of the following is not a valid Javascript variable name?',
        answers:[
            {text:'2names', correct:false},
            {text:'_names', correct:false},
            {text:'None of the above', correct:true},
            {text:'$names', correct:false}
        ]
    },
    {
        question:'Which of the following methods can be used to display data in some form using Javascript?',
        answers:[
            {text:'document.write()', correct:false},
            {text:'console.log()', correct:false},
            {text:'windows.alert()', correct:false},
            {text:'$All of the above', correct:true}
        ]
    },
    {
        question:'Which of the following is not a valid Javascript operator?',
        answers:[
            {text:'++', correct:false},
            {text:'--', correct:false},
            {text:'+=', correct:false},
            {text:'None of the above', correct:true}
        ]
    },


];
