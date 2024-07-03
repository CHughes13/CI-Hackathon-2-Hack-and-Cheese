document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("start-button");
  const welcomeScreen = document.getElementById("welcome-screen");
  const quizScreen = document.getElementById("quiz-screen");
  const questionText = document.getElementById("question-text");
  let currentCorrectAnswer;

  const answerElements = [
      document.getElementById("answer1"),
      document.getElementById("answer2"),
      document.getElementById("answer3"),
      document.getElementById("answer4"),
  ];

  const questions = [
      { question: "What is the capital of France?", answers: ["Paris", "London", "Berlin", "Madrid"], correctAnswer: "Paris" },
      { question: "What is 2 + 2?", answers: ["3", "4", "5", "6"], correctAnswer: "4" },
      { question: "Who wrote 'To Kill a Mockingbird'?", answers: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"], correctAnswer: "Harper Lee" },
      { question: "What is the chemical symbol for water?", answers: ["H2O", "CO2", "NaCl", "O2"], correctAnswer: "H2O" },
      { question: "What is the largest planet in our solar system?", answers: ["Earth", "Mars", "Jupiter", "Saturn"], correctAnswer: "Jupiter" },
      { question: "What is the capital of Japan?", answers: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"], correctAnswer: "Tokyo" },
      { question: "What is the hardest natural substance on Earth?", answers: ["Gold", "Iron", "Diamond", "Platinum"], correctAnswer: "Diamond" },
      { question: "Who painted the Mona Lisa?", answers: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], correctAnswer: "Leonardo da Vinci" },
      { question: "What is the capital of Australia?", answers: ["Sydney", "Melbourne", "Brisbane", "Canberra"], correctAnswer: "Canberra" },
      { question: "How many continents are there on Earth?", answers: ["5", "6", "7", "8"], correctAnswer: "7" },
      { question: "What is the smallest prime number?", answers: ["0", "1", "2", "3"], correctAnswer: "2" },
      { question: "What is the boiling point of water at sea level?", answers: ["90°C", "100°C", "110°C", "120°C"], correctAnswer: "100°C" },
      { question: "What is the primary ingredient in guacamole?", answers: ["Tomato", "Avocado", "Onion", "Pepper"], correctAnswer: "Avocado" },
      { question: "Which planet is known as the Red Planet?", answers: ["Earth", "Mars", "Jupiter", "Saturn"], correctAnswer: "Mars" },
      { question: "In which year did the Titanic sink?", answers: ["1910", "1911", "1912", "1913"], correctAnswer: "1912" },
      { question: "What is the capital of Canada?", answers: ["Toronto", "Vancouver", "Ottawa", "Montreal"], correctAnswer: "Ottawa" },
      { question: "Which element is said to keep bones strong?", answers: ["Iron", "Calcium", "Potassium", "Magnesium"], correctAnswer: "Calcium" },
      { question: "Who was the first person to walk on the moon?", answers: ["Buzz Aldrin", "Michael Collins", "Yuri Gagarin", "Neil Armstrong"], correctAnswer: "Neil Armstrong" },
      { question: "What is the largest ocean on Earth?", answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"], correctAnswer: "Pacific Ocean" },
      { question: "What is the main ingredient in traditional Japanese miso soup?", answers: ["Soybeans", "Chicken", "Beef", "Fish"], correctAnswer: "Soybeans" },
  ];

  let askedQuestions = [];

  function resetQuiz() {
      askedQuestions = [];
  }

  function getRandomQuestion() {
      let randomIndex;
      let question;

      do {
          randomIndex = Math.floor(Math.random() * questions.length);
          question = questions[randomIndex];
      } while (askedQuestions.includes(question));

      askedQuestions.push(question);

      return question;
  }

  function displayQuestion() {
      const questionObj = getRandomQuestion();
      questionText.textContent = questionObj.question;
      currentCorrectAnswer = questionObj.correctAnswer;

      questionObj.answers.forEach((answer, index) => {
          answerElements[index].querySelector(".text").textContent = answer;
          answerElements[index].classList.remove('correct', 'incorrect');
      });
  }

  function checkAnswer(selectedAnswer) {
      const isCorrect = selectedAnswer.querySelector(".text").textContent === currentCorrectAnswer;
      selectedAnswer.classList.add(isCorrect ? 'correct' : 'incorrect');
      answerElements.forEach(answerElement => {
          if (answerElement.querySelector(".text").textContent === currentCorrectAnswer) {
              answerElement.classList.add('correct');
          }
      });
      setTimeout(displayQuestion, 1000);
  }

  answerElements.forEach(answerElement => {
      answerElement.addEventListener("click", () => {
          checkAnswer(answerElement);
      });
  });

  startButton.addEventListener("click", () => {
      const username = document.getElementById('userName').value;
      welcomeScreen.classList.add('hidden');
      quizScreen.classList.remove('hidden');
      document.getElementById('greeting').innerText = `Hello, ${username}! Good luck!`;
      resetQuiz();
      displayQuestion();
  });
});
