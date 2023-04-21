const questions = [
  {
    question: "What is the correct way to declare a JavaScript variable?",
    choices: [
      "variable x = 5;",
      "var x = 5;",
      "v x = 5;",
      "None of the above"
    ],
    answer: "var x = 5;"
  },
  {
    question: "What is the correct way to write an if statement in JavaScript?",
    choices: [
      "if i == 5 then",
      "if i = 5 then",
      "if (i == 5)",
      "if i = 5",
    ],
    answer: "if (i == 5)"
  },
  {
    question: "What is the correct way to write a for loop in JavaScript?",
    choices: [
      "for (i < 5; i++)",
      "for (i = 0; i < 5; i++)",
      "for (i <= 5)",
      "for (i = 0; i <= 5)"
    ],
    answer: "for (i = 0; i < 5; i++)"
  },
  {
    question: "Which of the following is not a semantic element in HTML?",
    choices: [
      "for (artical)",
      "for (nav)",
      "for (div)",
      "for (footer)"
    ],
    answer: "for (div)"
  },
  {
    question: "What is the default display property for block-level elements in CSS?",
    choices: [
      "for (inline)",
      "for (block)",
      "for (inline-block)",
      "for (none)"
    ],
    answer: "for (block)"
  },
  {
    question: "Which property in CSS is used to change the background color of an element?",
    choices: [
      "for (color)",
      "for (background-color)",
      "for (background0image)",
      "for (none)"
    ],
    answer: "for (background-color)"
  },
  {
    question: "What is the purpose of the <meta> tag in HTML?",
    choices: [
      "for (To specify the title of the web page)",
      "for (To create a hyperlink to another web page)",
      "for (To define the character encoding of the web page)",
      "for (To add images to the web page)"
    ],
    answer: "for (To define the character encoding of the web page)"
  },
  {
    question: "What is the difference between padding and margin in CSS?",
    choices: [
      "for (Padding is the space inside an element, while margin is the space outside the element.)",
      "for (Padding is the space between an element and its border, while margin is the space inside the element.)",
      "for (Padding and margin are the same thing in CSS.)",
      "for (Padding is used for text formatting, while margin is used for page layout.)"
    ],
    answer: "for (Padding is the space inside an element, while margin is the space outside the element.)"
  },
  {
    question: "What is the purpose of the href attribute in an <a> tag in HTM?L",
    choices: [
      "for (To specify the text content of the link)",
      "for (To specify the URL that the link should go to)",
      "for (To specify the color of the link)",
      "for (To specify the font size of the link)"
    ],
    answer: "for (To specify the URL that the link should go to)"
  },
  {
    question: "What is the difference between the <b> and <strong> tags in HTML?",
    choices: [
      "for (There is no difference, they both make text bold.)",
      "for (<b> is used for aesthetic purposes, while <strong> is used for semantic purposes.)",
      "for (<strong> is used for aesthetic purposes, while <b> is used for semantic purposes.)",
      "for (<b> and <strong> are used interchangeably in HTML.)"
    ],
    answer: "for (<b> is used for aesthetic purposes, while <strong> is used for semantic purposes.)"
  },
  
];

let currentQuestion = 0;
let score = 0;

const quizContainer = document.querySelector("#quiz-container");
const questionEl = document.querySelector("h2");
const choicesEl = document.querySelector(".choices-container");
// const nextBtn = document.querySelector("#next-btn");
const endQuizContainer = document.querySelector("#quiz-end-container");


//Timer for quiz
const startingMinutes = 1;
let time = startingMinutes * 60;
const countdownElement = document.getElementById('timer');

// Update the timer every second
const countdownTimer = setInterval(() => {
const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  // Time remaining
  countdownElement.innerHTML = `${minutes}:${seconds}`;

  // Decrement the time by 1 second
  time--;

  // End the timer if time runs out
  if (time < 0) {
    clearInterval(countdownTimer);
    countdownElement.innerHTML = 'Time is up!';
    // Do something else when the timer ends (e.g. submit the quiz)
  }
}, 1000); // = 1 second


function showQuestion() {
  const question = questions[currentQuestion];
  questionEl.textContent = question.question;
  choicesEl.innerHTML = "";
  question.choices.forEach(choice => {
    const button = document.createElement("button");
    button.classList.add("choice-btn");
    button.textContent = choice;
    button.addEventListener("click", () => {
      if (button.textContent === question.answer) {
        score++;
      }
      if (currentQuestion === questions.length - 1) {
        endQuiz();
      } else {
        currentQuestion++;
        showQuestion();
      }
    });
    choicesEl.appendChild(button);
  });
}

function endQuiz() {
  quizContainer.style.display = "none";
  endQuizContainer.insertAdjacentHTML('beforeend', `
    <h2>You scored ${score} out of ${questions.length}.</h2>
    <button id="back-btn">Start Over</button>
  `);
  const restartBtn = document.querySelector("#restart-btn");
  
  const backBtn = document.querySelector("#back-btn");
  backBtn.addEventListener("click", function(){
    window.location.href = "index.html";
  });
}

showQuestion(); {
}

function showResults() {

  const score = calculateScore();
  const scorePage = createScorePage(score);
  document.body.innerHTML = scorePage;
  
  const restartBtn = document.getElementById('restart-btn');
  restartBtn.addEventListener('click', () => {
    window.location.reload();
  });
}

function calculateScore() {
}

function createScorePage(score) {
  // create a new HTML page to display the score
  const html = `
    <h1>Quiz Results</h1>
    <p>Your score: ${score}</p>
    <button id="restart-btn">Restart Quiz</button>
  `;
  return html;
}
