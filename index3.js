const chalk = require("chalk"); // Import the 'chalk' library for adding colored styling to console output
const prompt = require("prompt-sync")({ sigint: true }); // Import 'prompt-sync' for synchronous user input with support for Ctrl+C

// Object containing quiz questions categorized by topics and difficulty levels
const categories = {
  geography: {
    easy: [
      {
        question: "1. What is the capital of Spain?",
        answers: ["Barcelona", "Madrid", "Malaga", "Valencia"],
        correctAnswer: "Madrid",
      },
      {
        question: "2. How many continents are there?",
        answers: ["Five", "Six", "Seven", "Eight"],
        correctAnswer: "Seven",
      },
      {
        question: "3. Which ocean is the largest by surface area?",
        answers: [
          "Atlantic Ocean",
          "Indian Ocean",
          "Pacific Ocean",
          "Arctic Ocean",
        ],
        correctAnswer: "Pacific Ocean",
      },
      {
        question: "4. What is the largest country by land area?",
        answers: ["USA", "China", "Canada", "Russia"],
        correctAnswer: "Russia",
      },
      {
        question: "5. What is the largest desert in the world?",
        answers: ["Sahara", "Gobi", "Arabian", "Kalahari"],
        correctAnswer: "Sahara",
      },
      {
        question: "6. What is the smallest continent by land area?",
        answers: ["Europe", "Antarctica", "Oceania", "South America"],
        correctAnswer: "Oceania",
      },
      {
        question: "7. What is the most populous country in the world?",
        answers: ["China", "India", "USA", "Indonesia"],
        correctAnswer: "India",
      },
      {
        question: "8. Which city is known as the 'City of Canals'?",
        answers: ["Amsterdam", "Venice", "Bangkok", "Bruges"],
        correctAnswer: "Venice",
      },
      {
        question: "9. Which country is famous for the Great Wall?",
        answers: ["Japan", "India", "China", "South Korea"],
        correctAnswer: "China",
      },
      {
        question:
          "10. What is the largest country in South America by land area?",
        answers: ["Argentina", "Brazil", "Chile", "Peru"],
        correctAnswer: "Brazil",
      },
    ],
    medium: [
      {
        question:
          "1. Which country is home to the longest coastline in the world?",
        answers: ["Australia", "Russia", "United States", "Canada"],
        correctAnswer: "Canada",
      },
      {
        question: "2. Which river flows through the city of Cairo, Egypt?",
        answers: ["Tigris", "Nile", "Euphrates", "Amazon"],
        correctAnswer: "Nile",
      },
      {
        question: "3. What is the capital city of Australia?",
        answers: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        correctAnswer: "Canberra",
      },
      {
        question:
          "4. Which of these countries does NOT share a border with the Mediterranean Sea?",
        answers: ["Turkey", "Lebanon", "Italy", "Portugal"],
        correctAnswer: "Portugal",
      },
      {
        question: "5. What is the longest mountain range in the world?",
        answers: ["Himalayas", "Andes", "Rockies", "Alps"],
        correctAnswer: "Andes",
      },
      {
        question: "6. Which river is the longest in Europe?",
        answers: ["Danube", "Rhine", "Seine", "Volga"],
        correctAnswer: "Volga",
      },
      {
        question:
          "7. The Great Barrier Reef is located off the coast of which country?",
        answers: ["South Africa", "New Zealand", "Philippines", "Australia"],
        correctAnswer: "Australia",
      },
      {
        question: "8. Which country is known as the Land of the Rising Sun?",
        answers: ["China", "Japan", "South Korea", "Thailand"],
        correctAnswer: "Japan",
      },
      {
        question:
          "9. Which country is home to the famous ancient city of Petra?",
        answers: ["Jordan", "Egypt", "Saudi Arabia", "Syria"],
        correctAnswer: "Jordan",
      },
      {
        question: "10. What is the capital city of Canada?",
        answers: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        correctAnswer: "Ottawa",
      },
    ],
    hard: [
      {
        question: "1. What is the smallest country in the world by land area?",
        answers: ["Monaco", "Liechtenstein", "San Marino", "Vatican City"],
        correctAnswer: "Vatican City",
      },
      {
        question: "2. What is the deepest oceanic trench in the world?",
        answers: [
          "Tonga Trench",
          "Mariana Trench",
          "Java Trench",
          "Puerto Rico Trench",
        ],
        correctAnswer: "Mariana Trench",
      },
      {
        question: "3. What is the capital city of South Korea?",
        answers: ["Busan", "Seoul", "Incheon", "Daegu"],
        correctAnswer: "Seoul",
      },
      {
        question: "4. What is the tallest waterfall in the world?",
        answers: [
          "Niagara Falls",
          "Victoria Falls",
          "Angel Falls",
          "Iguazu Falls",
        ],
        correctAnswer: "Angel Falls",
      },
      {
        question: "5. What is the largest island in the Mediterranean Sea?",
        answers: ["Crete", "Sicily", "Corsica", "Cyprus"],
        correctAnswer: "Sicily",
      },
      {
        question:
          "6. Which country is the most linguistically diverse in the world?",
        answers: ["USA", "Nigeria", "Papua New Guinea", "China"],
        correctAnswer: "Papua New Guinea",
      },
      {
        question: "7. How many continents does the equator pass through?",
        answers: ["Two", "Three", "Four", "Five"],
        correctAnswer: "Three",
      },
      {
        question: "8. Which country has the most volcanoes in the world?",
        answers: ["Indonesia", "Japan", "United States", "Italy"],
        correctAnswer: "Indonesia",
      },
      {
        question: "9. The Danube River flows into which sea?",
        answers: [
          "Adriatic Sea",
          "Black Sea",
          "Baltic Sea",
          "Mediterranean Sea",
        ],
        correctAnswer: "Black Sea",
      },
      {
        question:
          "10. Which country is the largest producer of coffee in the world?",
        answers: ["Colombia", "Vietnam", "Brazil", "Ethiopia"],
        correctAnswer: "Brazil",
      },
    ],
  },
  history: {
    easy: [
      {
        question: "1. Who was the first man to walk on the Moon?",
        answers: [
          "Yuri Gagarin",
          "Buzz Aldrin",
          "Neil Armstrong",
          "Michael Collins",
        ],
        correctAnswer: "Neil Armstrong",
      },
      {
        question: "2. Which event triggered World War I?",
        answers: [
          "The bombing of Pearl Harbour",
          "The assassination of Archduke Franz Ferdinand",
          "The Treaty of Versailles",
          "The Russian Revolution",
        ],
        correctAnswer: "The assassination of Archduke Franz Ferdinand",
      },
      {
        question: "3. Which ancient civilization built the pyramids?",
        answers: ["Greeks", "Romans", "Egyptians", "Mayans"],
        correctAnswer: "Egyptians",
      },
      {
        question:
          "4. Who was the famous queen of ancient Egypt known for her relationships with Julius Caesar and Mark Antony?",
        answers: ["Nefertiti", "Cleopatra", "Hatshepsut", "Ramses"],
        correctAnswer: "Cleopatra",
      },
      {
        question:
          "5. Who was the leader of the Soviet Union during World War II?",
        answers: [
          "Joseph Stalin",
          "Leon Trotsky",
          "Vladimir Lenin",
          "Nikita Khrushchev",
        ],
        correctAnswer: "Joseph Stalin",
      },
      {
        question:
          "6. Which famous leader is known for his 'I Have a Dream' speech?",
        answers: [
          "Malcolm X",
          "Martin Luther King Jr.",
          "Nelson Mandela",
          "John F. Kennedy",
        ],
        correctAnswer: "Martin Luther King Jr.",
      },
      {
        question: "7. What famous ship sank on its maiden voyage in 1912?",
        answers: [
          "The Lusitania",
          "The Queen Mary",
          "The Titanic",
          "The Britannic",
        ],
        correctAnswer: "The Titanic",
      },
      {
        question: "8. Who was the first President of the United States?",
        answers: [
          "George Washington",
          "Thomas Jefferson",
          "Abraham Lincoln",
          "John Adams",
        ],
        correctAnswer: "George Washington",
      },
      {
        question: "9. What ancient wonder was located in the city of Babylon?",
        answers: [
          "The Hanging Gardens",
          "The Great Pyramid of Giza",
          "The Statue of Zeus",
          "The Colossus of Rhodes",
        ],
        correctAnswer: "The Hanging Gardens",
      },
      {
        question: "10. Which empire was ruled by Julius Caesar?",
        answers: [
          "Ottoman Empire",
          "Roman Empire",
          "Byzantine Empire",
          "Persian Empire",
        ],
        correctAnswer: "Roman Empire",
      },
    ],
    medium: [
      {
        question: "1. In which century was the American Civil War?",
        answers: [
          "Seventeenth Century",
          "Eighteenth Century",
          "Nineteenth Century",
          "Twentieth Century",
        ],
        correctAnswer: "Nineteenth Century",
      },
      {
        question: "2. The Cuban Missile Crisis occurred during which conflict?",
        answers: ["Korean War", "Cold War", "Vietnam War", "World War II"],
        correctAnswer: "Cold War",
      },
      {
        question: "3. Who sent Christopher Columbus to explore the New World?",
        answers: [
          "Queen Elizabeth I of England",
          "Louis XIV of France",
          "Pope Alexander VI",
          "King Ferdinand of Spain",
        ],
        correctAnswer: "King Ferdinand of Spain",
      },

      {
        question: "4. Which empire was ruled by Genghis Khan?",
        answers: [
          "The Ottoman Empire",
          "The Mongol Empire",
          "The Roman Empire",
          "The Byzantine Empire",
        ],
        correctAnswer: "The Mongol Empire",
      },

      {
        question: "5. Who was the last Tsar of Russia?",
        answers: [
          "Alexander III",
          "Peter the Great",
          "Nicholas II",
          "Ivan the Terrible",
        ],
        correctAnswer: "Nicholas II",
      },
      {
        question:
          "6. Leonardo da Vinci, Michelangelo, and Raphael all belong to which historical art period?",
        answers: ["Baroque", "Romanticism", "Renaissance", "Gothic"],
        correctAnswer: "Renaissance",
      },
      {
        question:
          "7. Modern-day Istanbul, Turkey, used to be called what when it was the capital of the Byzantine Empire?",
        answers: ["Constantinople", "Byzantium", "Nicomedia", "Ephesus"],
        correctAnswer: "Constantinople",
      },

      {
        question: "8. Who is the king of the Olympian gods in Greek mythology?",
        answers: ["Apollo", "Zeus", "Poseidon", "Hermes"],
        correctAnswer: "Zeus",
      },

      {
        question:
          "9. Which ancient figure is often considered the founder of Western philosophy?",
        answers: ["Plato", "Aristotle", "Pythagoras", "Socrates"],
        correctAnswer: "Socrates",
      },
      {
        question:
          "10. The Trojan War, according to Greek mythology, was fought over which city?",
        answers: ["Athens", "Troy", "Sparta", "Corinth"],
        correctAnswer: "Troy",
      },
    ],
    hard: [
      {
        question:
          "1. In which year did the Berlin Wall fall, symbolizing the end of the Cold War?",
        answers: ["1987", "1989", "1991", "1993"],
        correctAnswer: "1989",
      },
      {
        question:
          "2. What was the name of the first man-made satellite launched into space in 1957?",
        answers: ["Apollo 11", "Hubble", "Sputnik", "Explorer 1"],
        correctAnswer: "Sputnik",
      },
      {
        question:
          "3. The Vietnam War ended in 1975 with the fall of which city?",
        answers: ["Saigon", "Hanoi", "Phnom Penh", "Vientiane"],
        correctAnswer: "Saigon",
      },
      {
        question: "4. Who discovered penicillin?",
        answers: [
          "Louis Pasteur",
          "Marie Curie",
          "Alexander Fleming",
          "Robert Koch",
        ],
        correctAnswer: "Alexander Fleming",
      },
      {
        question: "5. Who is known as the 'Father of Medicine'?",
        answers: ["Aristotle", "Hippocrates", "Galen", "Avicenna"],
        correctAnswer: "Hippocrates",
      },
      {
        question: "6. How many years did the Hundred Years' War last?",
        answers: ["100", "116", "99", "105"],
        correctAnswer: "116",
      },
      {
        question:
          "7. Who is commonly referred to as the person who created the first printing press?",
        answers: [
          "Leonardo da Vinci",
          "Galileo Galilei",
          "Isaac Newton",
          "Johannes Gutenberg",
        ],
        correctAnswer: "Johannes Gutenberg",
      },
      {
        question: "8. The Incan Empire is located in which modern-day country?",
        answers: ["Peru", "Brazil", "Argentina", "Mexico"],
        correctAnswer: "Peru",
      },
      {
        question:
          "9. What is the name of the disease that ravaged and killed a third of Europe’s population in the 14th century?",
        answers: ["The Black Death", "Smallpox", "Cholera", "The Spanish Flu"],
        correctAnswer: "The Black Death",
      },
      {
        question: "10. Who was the first explorer to sail around the world?",
        answers: [
          "Christopher Columbus",
          "Ferdinand Magellan",
          "Vasco da Gama",
          "Hernán Cortés",
        ],
        correctAnswer: "Ferdinand Magellan",
      },
    ],
  },
  science: {
    easy: [
      {
        question: "1. What is the chemical symbol for water?",
        answers: ["H20", "C02", "02", "H2"],
        correctAnswer: "H20",
      },
      {
        question: "2. What planet is known as the Red Planet?",
        answers: ["Venus", "Mars", "Saturn", "Jupiter"],
        correctAnswer: "Mars",
      },
      {
        question: "3. What gas do plants primarily use for photosynthesis?",
        answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: "Carbon Dioxide",
      },
      {
        question:
          "4. The theory of evolution by natural selection was proposed by which scientist?",
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
          "5. The concept of gravity was discovered by which famous physicist?",
        answers: [
          "Isaac Newton",
          "Albert Einstein",
          "Galileo Galilei",
          "Niels Bohr",
        ],
        correctAnswer: "Isaac Newton",
      },
      {
        question: "6. What is the biggest planet in our solar system?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Jupiter",
      },
      {
        question: "7. What is the biggest animal in the world?",
        answers: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
        correctAnswer: "Blue Whale",
      },
      {
        question: "8. How many states of matter are there?",
        answers: ["Three", "Four", "Five", "Six"],
        correctAnswer: "Four",
      },
      {
        question: "9. What is the fastest land animal in the world?",
        answers: ["Cheetah", "Lion", "Horse", "Leopard"],
        correctAnswer: "Cheetah",
      },
      {
        question: "10. How many teeth does an adult human have?",
        answers: ["Twenty-eight", "Thirty", "Thirty-two", "Thirty-six"],
        correctAnswer: "Thirty-two",
      },
    ],
    medium: [
      {
        question:
          "1. What is the term for a substance that speeds up a chemical reaction without being consumed in the process?",
        answers: ["Solvent", "Catalyst", "Reactant", "Enzyme"],
        correctAnswer: "Catalyst",
      },
      {
        question: "2. What type of rock is formed from cooled magma or lava?",
        answers: ["Sedimentary", "Metamorphic", "Igneous", "Organic"],
        correctAnswer: "Igneous",
      },
      {
        question: "3. Which famous physicist wrote A Brief History of Time?",
        answers: [
          "Stephen Hawking",
          "Albert Einstein",
          "Isaac Newton",
          "Richard Feynman",
        ],
        correctAnswer: "Stephen Hawking",
      },
      {
        question:
          "4. Which is the main gas that makes up the Earth's atmosphere?",
        answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: "Nitrogen",
      },
      {
        question:
          "5. Which female scientist won a Nobel Prize in 1903 for her work on radioactivity?",
        answers: [
          "Marie Curie",
          "Rosalind Franklin",
          "Ada Lovelace",
          "Dorothy Hodgkin",
        ],
        correctAnswer: "Marie Curie",
      },
      {
        question: "6. What is the hardest natural substance on Earth?",
        answers: ["Gold", "Iron", "Diamond", "Graphite"],
        correctAnswer: "Diamond",
      },
      {
        question: "7. What is the largest organ in the human body?",
        answers: ["Liver", "Heart", "Skin", "Large Intestine"],
        correctAnswer: "Skin",
      },
      {
        question: "8. What does a Geiger Counter measure?",
        answers: ["Pressure", "Sound", "Radiation", "Temperature"],
        correctAnswer: "Radiation",
      },
      {
        question: "9. What metal is the best conductor of electricity?",
        answers: ["Copper", "Gold", "Silver", "Aluminum"],
        correctAnswer: "Silver",
      },
      {
        question: "10. What is the study of fungi called?",
        answers: ["Bacteriology", "Mycology", "Phycology", "Virology"],
        correctAnswer: "Mycology",
      },
    ],
    hard: [
      {
        question:
          "1. What is the term for an organism's ability to maintain a stable internal environment?",
        answers: ["Metabolism", "Homeostasis", "Adaptation", "Evolution"],
        correctAnswer: "Homeostasis",
      },
      {
        question:
          "2. What type of bond involves the sharing of electron pairs between atoms?",
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
          "3. In quantum mechanics, what is the term for the smallest unit of energy in a quantum system?",
        answers: ["Photon", "Electron", "Neutron", "Quark"],
        correctAnswer: "Photon",
      },
      {
        question:
          "4. What is the name of the layer of the atmosphere in which weather occurs?",
        answers: ["Stratosphere", "Troposphere", "Mesosphere", "Thermosphere"],
        correctAnswer: "Troposphere",
      },
      {
        question: "5. Which is the most abundant element in the universe?",
        answers: ["Oxygen", "Carbon", "Hydrogen", "Helium"],
        correctAnswer: "Hydrogen",
      },
      {
        question: "6. How many moons does the planet Mars have?",
        answers: ["One", "Two", "Three", "Four"],
        correctAnswer: "Two",
      },
      {
        question: "7. What Is The Chemical Symbol For Gold?",
        answers: ["Au", "Ag", "Pb", "Fe"],
        correctAnswer: "Au",
      },
      {
        question:
          "8. What is the term for the bending of light as it passes through a medium, such as a lens?",
        answers: ["Refraction", "Reflection", "Diffraction", "Absorption"],
        correctAnswer: "Refraction",
      },
      {
        question: "9. How many chambers make up the human heart?",
        answers: ["Two", "Three", "Four", "Five"],
        correctAnswer: "Four",
      },
      {
        question: "10. Where on the human body are the most sweat glands?",
        answers: ["Hands", "Feet", "Armpits", "Forehead"],
        correctAnswer: "Feet",
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
