// Quiz Data
const quizData = [
  {
    question: "What is 2 + 2?",
    options: ["2", "4", "6", "8"],
    correct: "4"
  },
  {
    question: "Which language runs in the browser?",
    options: ["Python", "Java", "JavaScript", "C++"],
    correct: "JavaScript"
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Mark Language",
      "Hyper Tool Multi Language"
    ],
    correct: "Hyper Text Markup Language"
  }
];

let currentQuestionIndex = 0;
let score = 0;


const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const quizContainer = document.getElementById("quiz-container");




//Load Question (Arrow Function + Destructuring)
const loadQuestion = () => {


  const { question, options } = quizData[currentQuestionIndex];


  questionEl.textContent = question;
  answersEl.innerHTML = "";


  options.forEach(option => {
    answersEl.innerHTML += `
      <button class="answer-btn">${option}</button>
    `;
  });
};


