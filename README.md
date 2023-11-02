# Quiz Application

This is a simple dynamic quiz application created using HTML, CSS, and JavaScript. The application loads questions from a local JSON file, presents them one at a time to the user, and displays the user's score at the end. The application also includes bonus features like question randomization, timers, and a progress bar.

## Getting Started

To run the quiz application, follow these steps:

1. Clone or download this repository to your local machine.

2. Open the `index.html` file in a modern web browser (e.g., Chrome, Firefox).

3. Start the quiz by clicking the "Next" button. Answer the questions one by one.

4. After completing the quiz, you will receive your score and a personalized message.

## Quiz Data

The quiz questions are stored in a JavaScript array (`quizData`) in the `main.js` file. You can add, modify, or remove questions as needed. Each question has the following format:

```javascript
{
  question: "What is the capital of France?",
  options: ["New York", "London", "Paris", "Dublin"],
  answer: "Paris"
}


## Bonus Features
Questions are randomized each time the quiz is started.
A timer is implemented for each question, and the total time taken to complete the quiz is displayed.
A progress bar indicates how many questions have been answered.


##Live Demo
You can view a live demo of the application on Vercel: Quiz App Demo

Contributing
If you'd like to contribute to this project or suggest improvements, please feel free to open an issue or create a pull request.

License
This project is licensed under the MIT License - see the LICENSE.md file for details.

Acknowledgments
This project was created by Sunil Kumawat.
