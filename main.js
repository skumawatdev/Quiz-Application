// Quiz data (questions are shuffled)
const quizData = [
  {
    question: "What is the capital of France?",
    options: ["New York", "London", "Paris", "Dublin"],
    answer: "Paris"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo Da Vinci", "Claude Monet"],
    answer: "Leonardo Da Vinci"
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Jupiter"
  },
  {
    question: "How many continents are there on Earth?",
    options: ["3", "5", "7", "9"],
    answer: "7"
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Leo Tolstoy"],
    answer: "William Shakespeare"
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Go", "Gd", "Au", "Ag"],
    answer: "Au"
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    answer: "Mars"
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Lion"],
    answer: "Blue Whale"
  },
  {
    question: "In which year did the Titanic sink?",
    options: ["1905", "1912", "1923", "1931"],
    answer: "1912"
  },
  {
    question: "Which gas do plants absorb from the atmosphere during photosynthesis?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answer: "Carbon Dioxide"
  },
  {
    question: "Who is the author of the 'Harry Potter' book series?",
    options: ["J.R.R. Tolkien", "George Orwell", "J.K. Rowling", "Agatha Christie"],
    answer: "J.K. Rowling"
  },
  {
    question: "What is the national flower of Japan?",
    options: ["Rose", "Tulip", "Orchid", "Cherry Blossom"],
    answer: "Cherry Blossom"
  }
];

// Personalized messages for the result
const resultMessages = {
  0: "You can do better next time!",
  1: "Nice try!",
  2: "Good job!",
  // Add more messages as needed
};

// Initialize quiz variables
let currentQuestionIndex = 0;
let score = 0;
let timer;
let totalTime = 0;

// Function to shuffle the order of questions
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Shuffle the order of questions
shuffleArray(quizData);

// Function to start the timer for each question
function startTimer() {
  timer = setInterval(() => {
    totalTime++;
  }, 1000); // Update time every second (1000 ms)
}

// Function to stop the timer
function stopTimer() {
  clearInterval(timer);
}

// Function to load and render the current question
function loadQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  const questionText = document.querySelector(".question-text");
  const optionsContainer = document.querySelector(".options-container");
  const progressBar = document.getElementById("progress-bar");

  questionText.textContent = currentQuestion.question;
  optionsContainer.innerHTML = "";

  // Update progress bar
  const progressPercentage = (currentQuestionIndex / quizData.length) * 100;
  progressBar.style.width = progressPercentage + "%";

  currentQuestion.options.forEach((option, index) => {
    const optionButton = document.createElement("button");
    optionButton.textContent = option;
    optionButton.onclick = () => checkAnswer(option);
    optionsContainer.appendChild(optionButton);
  });

  // Start the timer for this question
  startTimer();
}

// Function to check the user's answer
function checkAnswer(selectedOption) {
  stopTimer(); // Stop the timer when an answer is selected
  const currentQuestion = quizData[currentQuestionIndex];
  if (selectedOption === currentQuestion.answer) {
    score++;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    startTimer(); // Start the timer for the next question
    loadQuestion();
  } else {
    displayResult();
  }
}

// Function to display the user's score and a message
function displayResult() {
  const resultContainer = document.getElementById("result");
  const scoreMessage = resultMessages[score] || "Congratulations!";
  resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}! ${scoreMessage} Total time taken: ${totalTime} seconds`;
  resultContainer.classList.remove("hidden");
  document.getElementById("next-button").style.display = "none";
}

// Function to move to the next question
function nextQuestion() {
  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
  }
}

// Initial load of the first question
loadQuestion();
