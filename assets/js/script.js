document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const startButton = document.getElementById("start-button");
    const welcomeScreen = document.getElementById("welcome-screen");
    const quizScreen = document.getElementById("quiz-screen");
    const questionText = document.getElementById("question-text");
    const toggleTimer = document.getElementById("flexSwitchCheckDefault");
    const timerDisplay = document.getElementById("timer");
    const answerElements = [
        document.getElementById("answer1"),
        document.getElementById("answer2"),
        document.getElementById("answer3"),
        document.getElementById("answer4"),
    ];
    const scoreBoard = document.getElementById("score-board");
    const homeButtonContainer = document.getElementById("home-button-container");
    const homeButton = document.getElementById("home-button");
    const resultsScreen = document.getElementById("results-screen");
    const correctCountElement = document.getElementById("correct-count");
    const incorrectCountElement = document.getElementById("incorrect-count");
    const bestStreakElement = document.getElementById("best-streak");

    // Variables for quiz logic
    let currentCorrectAnswer = '';
    let correctCount = 0;
    let incorrectCount = 0;
    let currentStreak = 0;
    let bestStreak = 0;
    let askedQuestions = [];
    let isQuestionAnswered = false; // Prevents repeated scoring on a single question

    // Questions array
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

    // Reset quiz to initial state
    function resetQuiz() {
        askedQuestions = [];
        correctCount = 0;
        incorrectCount = 0;
        currentStreak = 0;
        bestStreak = 0;
        updateScoreBoard();
        isQuestionAnswered = false;
    }

    // Update scoreboard display
    function updateScoreBoard() {
        correctCountElement.textContent = correctCount;
        incorrectCountElement.textContent = incorrectCount;
        bestStreakElement.textContent = bestStreak;
    }

    // Retrieve a random question that hasn't been asked yet
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

    // Display a new question or end quiz if all questions are asked
    function displayQuestion() {
        if (askedQuestions.length >= questions.length) {
            endQuiz();
            return;
        }
        const questionObj = getRandomQuestion();
        questionText.textContent = questionObj.question;
        currentCorrectAnswer = questionObj.correctAnswer;
        answerElements.forEach((answer, index) => {
            answer.querySelector(".text").textContent = questionObj.answers[index];
            answer.classList.remove('correct', 'incorrect');
        });
        isQuestionAnswered = false;
    }

    // Check answer correctness
    function checkAnswer(selectedAnswer) {
        if (!isQuestionAnswered) {
            const isCorrect = selectedAnswer.querySelector(".text").textContent === currentCorrectAnswer;
            selectedAnswer.classList.add(isCorrect ? 'correct' : 'incorrect');
            answerElements.forEach(answerElement => {
                if (answerElement.querySelector(".text").textContent === currentCorrectAnswer) {
                    answerElement.classList.add('correct');
                }
            });

            if (isCorrect) {
                correctCount++;
                currentStreak++;
                if (currentStreak > bestStreak) {
                    bestStreak = currentStreak;
                }
            } else {
                incorrectCount++;
                currentStreak = 0;
            }
            updateScoreBoard();
            setTimeout(displayQuestion, 1000);
            isQuestionAnswered = true;
        }
    }

    

    // Add event listeners to each answer element
    answerElements.forEach(answerElement => {
        answerElement.addEventListener("click", () => checkAnswer(answerElement));
    });

    // Handle start quiz button click
    startButton.addEventListener("click", (event) => {
        const usernameInput = document.getElementById("userName");
        usernameInput.addEventListener("input", () => {
            usernameInput.value = usernameInput.value.toUpperCase();
        });

        const username = usernameInput.value;
        if (!username.trim()) {
            event.preventDefault();
            alert("Username is required!");
            return;
        } else if (usernameInput.value.length > 20) {
            event.preventDefault();
            alert("Username is too long, please try again!");
            return;
        }

        welcomeScreen.classList.add('hidden');
        quizScreen.classList.remove('hidden');
        scoreBoard.classList.remove('hidden');
        homeButtonContainer.classList.remove('hidden');
        document.getElementById('greeting').textContent = `Hello, ${username}! Good luck!`;
        resetQuiz();
        displayQuestion();
        if (toggleTimer.checked) {
            startTimer(120, timerDisplay); // Optional 10 minutes timer
        }
    });

    // Timer functionality
    function startTimer(duration, display) {
        let timer = duration, minutes, seconds;
        display.classList.remove('hidden');
        const timerInterval = setInterval(() => {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = `${minutes}:${seconds}`;

            if (--timer < 0) {
                clearInterval(timerInterval);
                display.textContent = "Time is up!";
                endQuiz();
            }
        }, 1000);
    }

    // End quiz logic
function endQuiz() {
    quizScreen.classList.add('hidden');
    homeButtonContainer.classList.remove('hidden');
    resultsScreen.classList.remove('hidden');
    const resultsMessageBox = document.getElementById("results-message-box");
    const totalQuestions = questions.length;
    const finalMessage = resultsMessage(totalQuestions, correctCount); // Use the resultsMessage function
    resultsMessageBox.textContent = finalMessage; // Display the final message in the results box
}


    function resultsMessage(totalQuestions, correctCount) {
        const percentage = (correctCount / totalQuestions) * 100;
        const fixedPercentage = percentage.toFixed(0); // Rounds the percentage to the nearest whole number
    
        if (percentage >= 80) {
            return `Your score is ${fixedPercentage}%! You Feta believe you're the best! Well done!`;
        } else if (percentage >= 60) {
            return `Your score is ${fixedPercentage}%! You are Brie-lliant! Well done!`;
        } else if (percentage >= 40) {
            return `Your score is ${fixedPercentage}%! You need to mature a bit more. Try again!`;
        } else {
            return `Your score is ${fixedPercentage}%! That's not a Gouda score. Try again!`;
        }
    }
    

    // Handle home button click to reset and show welcome screen
    homeButton.addEventListener("click", () => {
        welcomeScreen.classList.remove('hidden');
        quizScreen.classList.add('hidden');
        scoreBoard.classList.add('hidden');
        homeButtonContainer.classList.add('hidden');
        resultsScreen.classList.add('hidden');
        resetQuiz();
    });
});
