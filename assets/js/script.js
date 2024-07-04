/**
 * Event listener that runs when the DOM content is fully loaded.
 */
document.addEventListener("DOMContentLoaded", () => {

    // Elements
    /**
     * @type {HTMLElement} The button to start the quiz.
     */
    const startButton = document.getElementById("start-button");

    /**
     * @type {HTMLElement} The welcome screen element.
     */
    const welcomeScreen = document.getElementById("welcome-screen");

    /**
     * @type {HTMLElement} The quiz screen element.
     */
    const quizScreen = document.getElementById("quiz-screen");

    /**
     * @type {HTMLElement} The element to display the current question.
     */
    const questionText = document.getElementById("question-text");

    /**
     * @type {HTMLElement} The element to display the timer.
     */
    const timerDisplay = document.getElementById("timer");

    /**
     * @type {HTMLElement} The scoreboard element.
     */
    const scoreBoard = document.getElementById("score-board");

    /**
     * @type {HTMLElement} The container for the home button.
     */
    const homeButtonContainer = document.getElementById("home-button-container");

    /**
     * @type {HTMLElement} The home button element.
     */
    const homeButton = document.getElementById("home-button");

    // /**
    //  * @type {HTMLElement} The results screen element.
    //  */
    const resultsScreen = document.getElementById("results-screen");

    /**
     * @type {HTMLElement} The element to display the correct count.
     */
    const correctCountElement = document.getElementById("correct-count");

    /**
     * @type {HTMLElement} The element to display the incorrect count.
     */
    const incorrectCountElement = document.getElementById("incorrect-count");

    /**
     * @type {HTMLElement} The element to display the best streak.
     */
    const bestStreakElement = document.getElementById("best-streak");


    // Answer elements
    /**
     * @type {HTMLElement[]} Array of answer elements.
     */
    const answerElements = [
        document.getElementById("answer1"),
        document.getElementById("answer2"),
        document.getElementById("answer3"),
        document.getElementById("answer4"),
    ];

    // Variables for quiz logic
    let currentCorrectAnswer = '';
    let correctCount = 0;
    let incorrectCount = 0;
    let currentStreak = 0;
    let bestStreak = 0;
    let askedQuestions = [];
    let isQuestionAnswered = false; // Prevents repeated scoring on a single question

    // Questions array (merged)
    /**
     * Array of question objects.
     * @type {Array<{question: string, answers: string[], correctAnswer: string}>}
     */
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

    /**
     * Resets the quiz to its initial state.
     */
    function resetQuiz() {
        askedQuestions = [];
        correctCount = 0;
        incorrectCount = 0;
        currentStreak = 0;
        bestStreak = 0;
        updateScoreBoard();
        isQuestionAnswered = false;
    }

    /**
     * Updates the scoreboard display with the current counts.
     */
    function updateScoreBoard() {
        correctCountElement.textContent = correctCount;
        incorrectCountElement.textContent = incorrectCount;
        bestStreakElement.textContent = bestStreak;
    }

    /**
     * Retrieves a random question that hasn't been asked yet.
     * @returns {Object} A question object.
     */
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

    /**
     * Displays a new question or ends the quiz if all questions are asked.
     */
    function displayQuestion() {
        if (askedQuestions.length >= questions.length) {
            endQuiz();
            return;
        }

        const questionObj = getRandomQuestion();
        questionText.textContent = questionObj.question;
        currentCorrectAnswer = questionObj.correctAnswer;

        answerElements.forEach((answer, index) => {
            answer.textContent = questionObj.answers[index];
            answer.classList.remove('correct', 'incorrect');
        });

        isQuestionAnswered = false;
    }

    /**
     * Checks the selected answer for correctness and updates the score.
     * @param {HTMLElement} selectedAnswer - The selected answer element.
     */
    function checkAnswer(selectedAnswer) {
        if (!isQuestionAnswered) {
            const isCorrect = selectedAnswer.textContent === currentCorrectAnswer;
            selectedAnswer.classList.add(isCorrect ? 'correct' : 'incorrect');

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

    //Works out final score as a percentage so if more questions are added it's scale up with it
    function resultMessage(totalQuestions, correctCount) {
    const percentage = (correctCount / totalQuestions) * 100;
    const fixedPercentage = percentage.toFixed(0);

    if (fixedPercentage >= 80) {
        return `Your score is ${fixedPercentage}%! You Feta believe you're the best! Well done!`;
    } else if (fixedPercentage >= 60) {
        return `Your score is ${fixedPercentage}%! You are Brie-lliant! Well done!`;
    } else if (fixedPercentage >= 40) {
        return `Your score is ${fixedPercentage}%! You need to mature a bit more. Try again!`;
    } else {
        return `Your score is ${fixedPercentage}%! That's not a Gouda score. Try again!`;
    }
}

    function endQuiz(totalQuestions, correctCount) {
        quizScreen.classList.add('hidden');
        homeButtonContainer.classList.add('hidden');
        resultsScreen.classList.remove('hidden');

        const resultsMessageBox = document.getElementById("results-message-box");
        const message = resultsMessage(totalQuestions, correctCount);
        resultsMessageBox.textContent = message;
    }

    // Add event listeners to each answer element
    answerElements.forEach(answerElement => {
        answerElement.addEventListener("click", () => checkAnswer(answerElement));
    });



    // Handle start quiz button click
    startButton.addEventListener("click", () => {
        const username = document.getElementById('userName').value;
        if (!username.trim()) {
            alert("Username is required!");
            return;
        }

        welcomeScreen.classList.add('hidden');
        quizScreen.classList.remove('hidden');
        scoreBoard.classList.remove('hidden');
        homeButtonContainer.classList.remove('hidden');
        document.getElementById('greeting').textContent = `Hello, ${username}! Good luck!`;

        resetQuiz();
        displayQuestion();

        if (document.getElementById("flexSwitchCheckDefault").checked) {
            startTimer(600, timerDisplay); // Optional 10 minutes timer
        }
    });

    /**
     * Starts a timer for the quiz.
     * @param {number} duration - The timer duration in seconds.
     * @param {HTMLElement} display - The element to display the timer.
     */
    function startTimer(duration, display) {
        let timer = duration, minutes, seconds;
        let timerInterval = setInterval(() => {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            display.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

            if (--timer < 0) {
                clearInterval(timerInterval);
                display.textContent = "Time is up!";
            }
        }, 1000);
    }

    /**
     * Ends the quiz and displays the results.
     */
    // function endQuiz() {
    //     quizScreen.classList.add('hidden');
    //     homeButtonContainer.classList.add('hidden');
    //     resultsScreen.classList.remove('hidden');
    //     const resultsMessage = `Quiz Complete! You scored ${correctCount} out of ${questions.length}`;
    //     document.getElementById("results-message").textContent = resultsMessage;
    // }

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