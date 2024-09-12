const chalk = require("chalk"); // Import the 'chalk' library for adding colored styling to console output
const prompt = require("prompt-sync")({ sigint: true }); // Import 'prompt-sync' for synchronous user input with support for Ctrl+C

// Object containing quiz questions categorized by topics and difficulty levels
const categories = {
  geography: {
    easy: [
      {
        question: "What is the capital of France?", // Question prompt
        answers: ["Paris", "Marseilles", "Lyon", "Bordeaux"], // List of possible answers
        correctAnswer: "Paris", // Correct answer
      },
      {
        question: "How many continents are there?",
        answers: ["5", "6", "7", "8"],
        correctAnswer: "7",
      },
      {
        question: "Which ocean is the largest by surface area?",
        answers: [
          "Atlanic Ocean",
          "Indian Ocean",
          "Pacific Ocean",
          "Arctic Ocean",
        ],
        correctAnswer: "Pacific Ocean",
      },
      {
        question: "What is the largest country by land area?",
        answers: ["USA", "China", "Canada", "Russia"],
        correctAnswer: "Russia",
      },
    ],
    medium: [
      {
        question:
          "Which country is home to the longest coastline in the world?",
        answers: ["Australia", "Russia", "United States", "Canada"],
        correctAnswer: "Canada",
      },
      {
        question: "Which river flows through the city of Cairo, Egypt?",
        answers: ["Tigris", "Nile", "Euphrates", "Amazon"],
        correctAnswer: "Nile",
      },
      {
        question: "What is the capital city of Australia?",
        answers: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        correctAnswer: "Canberra",
      },
      {
        question:
          "Which of these countries does NOT share a border with the Mediterranean Sea?",
        answers: ["Turkey", "Lebanon", "Italy", "Portugal"],
        correctAnswer: "Portugal",
      },
    ],
    hard: [
      {
        question: "What is the smallest country in the world by land area?",
        answers: ["Monaco", "Liechtenstein", "San Marino", "Vatican City"],
        correctAnswer: "Vatican City",
      },
      {
        question: "What is the deepest oceanic trench in the world?",
        answers: [
          "Tonga Trench",
          "Mariana Trench",
          "Java Trench",
          "Puerto Rico Trench",
        ],
        correctAnswer: "Mariana Trench",
      },
      {
        question: "What is the capital city of South Korea?",
        answers: ["Seoul", "Busan", "Tokyo", "Beijing"],
        correctAnswer: "Seoul",
      },
      {
        question: "What is the tallest waterfall in the world?",
        answers: [
          "Niagara Falls",
          "Victoria Falls",
          "Angel Falls",
          "Iguazu Falls",
        ],
        correctAnswer: "Angel Falls",
      },
    ],
  },
  history: {
    easy: [
      {
        question: "Who was the first man to walk on the Moon?",
        answers: [
          "Yuri Gagarin",
          "Buzz Aldrin",
          "Neil Armstrong",
          "Michael Collins",
        ],
        correctAnswer: "Neil Armstrong",
      },
      {
        question: "Which event triggered World War I?",
        answers: [
          "The bombing of Pearl Harbour",
          "The assassination of Archduke Franz Ferdinand",
          "The Treaty of Versailles",
          "The Russian Revolution",
        ],
        correctAnswer: "The assassination of Archduke Franz Ferdinand",
      },
      {
        question: "Which ancient civilization built the pyramids?",
        answers: ["Greeks", "Romans", "Egyptians", "Mayans"],
        correctAnswer: "Egyptians",
      },
    ],
    medium: [
      {
        question: "In what year did the American Civil War begin?",
        answers: ["1861", "1776", "1812", "1901"],
        correctAnswer: "1861",
      },
      {
        question: "The Cuban Missile Crisis occured during which decade?",
        answers: ["1940s", "1950s", "1960s", "1970s"],
        correctAnswer: "1960s",
      },
      {
        question:
          "Who was the first Emperor of China, known for the construction of the Great Wall?",
        answers: ["Qin Shi Huang", "Genghis Khan", "Sun Yat-sen", "Mao Zedong"],
        correctAnswer: "Qin Shi Huang",
      },
    ],
    hard: [
      {
        question:
          "In which year did the Berlin Wall fall, symbolizing the end of the Cold War?",
        answers: ["1987", "1989", "1991", "1993"],
        correctAnswer: "1989",
      },
      {
        question:
          "What was the name of the first man-made satellite launched into space in 1957",
        answers: ["Apollo 11", "Hubble", "Sputnik", "Explorer 1"],
        correctAnswer: "Sputnik",
      },
      {
        question: "The Vietnam War ended in 1975 with the fall of which city?",
        answers: ["Saigon", "Hanoi", "Phnom Penh", "Vientiane"],
        correctAnswer: "Saigon",
      },
    ],
  },
  science: {
    easy: [
      {
        question: "What is the chemical symbol for water?",
        answers: ["H20", "C02", "02", "H2"],
        correctAnswer: "H20",
      },
      {
        question: "What planet is known as the Red Planet?",
        answers: ["Venus", "Mars", "Saturn", "Jupiter"],
        correctAnswer: "Mars",
      },
      {
        question: "What gas to plants primarily use for photosynthesis?",
        answers: ["Oxygen", "Carbon Dioxide", "Nitrogren", "Hydrogen"],
        correctAnswer: "Carbon Dioxide",
      },
    ],
    medium: [
      {
        question:
          "The theory of evolution by natural selection was proposed by which scientist?",
        answers: [
          "Isaac Newton",
          "Albert Einstein",
          "Charles Darwin",
          "Galileo Galilei",
        ],
        correctAnswer: "Charles Darwin",
      },
      {
        question:
          "What is the term for a substance that speeds up a chemical reaction without being consumed in the process?",
        answers: ["Solvent", "Catalyst", "Reactant", "Enzyme"],
        correctAnswer: "Catalyst",
      },
      {
        question: "What type of rock is formed from cooled magma or lava",
        answers: ["Sedimentary", "Metamorphic", "Igneous", "Organic"],
        correctAnswer: "Igneous",
      },
    ],
    hard: [
      {
        question:
          "What is the term for an organism's ability to maintain a stable internal environment?",
        answers: ["Metabolism", "Homeostasis", "Adaptation", "Evolution"],
        correctAnswer: "Homeostasis",
      },
      {
        question:
          "What type of bond involves the sharing of electron pairs between atoms?",
        answers: [
          "Ionic Bond",
          "Covalent Bond",
          "Metallic Bond",
          "Hydrogen Bond",
        ],
        correctAnswer: "Covalent Bond",
      },
      {
        question:
          "In quantum mechanics, what is the term for the smallest unit of energy in a quantum system?",
        answers: ["Photon", "Electron", "Neutron", "Quark"],
        correctAnswer: "Photon",
      },
    ],
  },
};

// --------------------------------------------------------------

// Function to display the welcome message
function displayWelcomeMessage() {
  console.log(chalk.bold.magenta("\nWelcome to the Quiz Game!")); // Display welcome message in magenta and bold
  console.log(
    "Test your knowledge across various categories and difficulty levels. Try to get as many correct answers as you can!"
  );
  console.log(" "); // Blank line for readability
}

// --------------------------------------------------------------

// Function to prompt the user to choose a quiz category
function promptForCategory() {
  console.log(chalk.bold.green("\nAvailable categories:")); // Display available categories in green and bold
  console.log(chalk.green("1. Geography"));
  console.log(chalk.green("2. History"));
  console.log(chalk.green("3. Science"));
  console.log(" "); // Blank line for readability

  // Prompt user to select a category by entering a number
  let categoryNumber = prompt("Please choose a category (1-3): ").trim();
  console.log(" "); // Blank line for readability

  // Mapping user input (1, 2, 3) to category names
  const categoryMap = {
    1: "geography",
    2: "history",
    3: "science",
  };

  // Validate user input; loop until a valid input is received
  while (!["1", "2", "3"].includes(categoryNumber)) {
    console.log(
      chalk.red("Invalid choice. Please enter a number between 1 and 3.") // Display error message in red
    );
    categoryNumber = prompt("Please choose a category (1-3): ").trim(); // Prompt again
    console.log(" "); // Blank line for readability
  }

  return categoryMap[categoryNumber]; // Return the category corresponding to the user input
}

// --------------------------------------------------------------

// Function to prompt the user to choose a difficulty level for the selected category
function promptForDifficulty(category) {
  console.log(chalk.bold.green("Difficulty level:") + " Easy, Medium, Hard"); // Display difficulty levels in green and bold
  console.log(" "); // Blank line for readability

  // Prompt user to select a difficulty level
  let difficulty = prompt("Please choose a difficulty level: ")
    .trim()
    .toLowerCase();
  console.log(" "); // Blank line for readability

  // Validate user input; loop until a valid input is received
  while (!categories[category][difficulty]) {
    console.log(chalk.red("Invalid input. Please choose again.")); // Display error message in red
    difficulty = prompt("Please choose a difficulty level: ")
      .trim()
      .toLowerCase(); // Prompt again
    console.log(" "); // Blank line for readability
  }

  return difficulty; // Return the chosen difficulty level
}

// --------------------------------------------------------------

// Function to retrieve questions based on the selected category and difficulty
function getQuestions(category, difficulty) {
  return categories[category][difficulty]; // Return the array of questions for the chosen category and difficulty
}

// --------------------------------------------------------------

// Function to ask a question and check the user's answer
function askQuestion(questionObj) {
  console.log(chalk.bold.cyan(questionObj.question)); // Display the question in cyan and bold
  console.log(" "); // Blank line for readability

  // Display possible answers
  questionObj.answers.forEach((answer, index) => {
    console.log(`${index + 1}. ${answer}`); // Format answers with numbers
  });

  console.log(" "); // Blank line for readability

  // Prompt user to choose an answer
  let userAnswer = prompt(
    chalk.yellow("Please choose your answer (1-4): ") // Display prompt in yellow
  ).trim();

  // Ensure the input is a number between 1 and 4
  while (!["1", "2", "3", "4"].includes(userAnswer)) {
    console.log(
      chalk.red("Invalid input. Please enter a number between 1 and 4.") // Display error message in red
    );
    userAnswer = prompt("Please choose your answer (1-4): ").trim(); // Prompt again
  }

  // Converts user's answer from a string to a number and matches it with the corresponding index in the answers array
  const chosenAnswer = questionObj.answers[parseInt(userAnswer) - 1];

  // Check if the chosen answer matches the correct answer
  if (chosenAnswer === questionObj.correctAnswer) {
    console.log(chalk.green("\nCorrect!\n")); // Display success message in green
    return true; // Return true if the answer is correct (this will increase user's score)
  } else {
    console.log(
      chalk.red(`\nWrong! The correct answer is ${questionObj.correctAnswer}\n`) // Display error message in red
    );
    return false; // Return false if the answer is incorrect (this will not increase user's score)
  }
}

// --------------------------------------------------------------

// Function to start the quiz and handle user interactions
function startQuiz() {
  let playAgain = "y"; // Initialize playAgain variable to control the game loop
  let firstPlay = true; // Flag to track if this is the first time playing

  // Loop to allow the user to play multiple quizzes
  while (playAgain.toLowerCase() === "y") {
    if (firstPlay) {
      displayWelcomeMessage(); // Display the welcome message only on the first play
      firstPlay = false; // Update the flag so the message is not shown again
    }

    // Prompt user to choose a category
    let category = promptForCategory();

    // Prompt user to choose a difficulty level
    let difficulty = promptForDifficulty(category);

    // Retrieve questions based on chosen category and difficulty
    let questions = getQuestions(category, difficulty);

    let score = 0; // Initialize score counter

    // Loop through each question and update score based on correct/incorrect answers
    questions.forEach((questionObj) => {
      if (askQuestion(questionObj)) {
        score++; // Increment score if the answer is correct
      }
    });

    // Display final score to the user
    console.log(
      chalk.bold.blue(`Quiz over. Your score is ${score}/${questions.length}\n`) // Display score in blue and bold
    );

    // Ask the user if they want to play again
    playAgain = prompt("Do you want to play again? (y/n): ")
      .trim()
      .toLowerCase();
    console.log("------------------------------------"); // Separator line for readability
    console.log("************************************"); // Separator line for readability

    // Validate playAgain input; loop until a valid input is received
    while (playAgain !== "y" && playAgain !== "n") {
      playAgain = prompt(
        chalk.red("Invalid input.") + " Do you want to play again? (y/n): " // Display error message in red
      )
        .trim()
        .toLowerCase();
      console.log("------------------------------------"); // Separator line for readability
      console.log("************************************"); // Separator line for readability
    }

    // Display a thank you message if the user chooses not to play again
    if (playAgain === "n") {
      console.log(chalk.yellow("\nThanks for playing!\n")); // Display thank you message in yellow
    }
  }
}

// Start the quiz when the script is executed
startQuiz();
