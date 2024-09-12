### Project: Terminal-Based Quiz Game in JavaScript

#### Objective

Your goal is to create a text-based quiz game that runs in the terminal. The game should offer a variety of trivia questions across different categories and difficulty levels.

#### Features and Requirements

1. **Categories**: Your quiz game should have at least three different categories. For example, you might choose categories like "Science," "History," and "Entertainment."
2. **Difficulty Levels**: Each category should offer questions at multiple difficulty levels: Easy, Medium, and Hard.
3. **Question Pool**: Preload the game with a minimum of 5 questions per category per difficulty level. The questions can be multiple-choice or true/false.
4. **User Interaction**: Use a package like `prompt-sync` to interact with the user. Prompt the user to choose a category and difficulty level before starting the quiz.
5. **Question Presentation**: Once the user has made their choices, present one question at a time and ask for their answer.
6. **Scoring**: Keep track of the user's score.
7. **Feedback**: After each question, inform the user whether they were correct or not and display the correct answer if they were wrong.
8. **Game Progression**: After answering all questions in a round, display the user's total score and offer them the option to play another round or quit the game.
9. **Data Validation**: Implement input validation to handle invalid inputs gracefully. For example, if a user types in an incorrect choice, prompt them to try again.

#### Technical Notes

- You're only allowed to use plain JavaScript and the terminal for this project. No external libraries for the game logic, please.
- Use an npm package like `prompt-sync` to gather user input. You'll need to install this package using npm.

#### Example

```
Welcome to the Quiz Game!

Categories:
1. Science
2. History
3. Entertainment

Choose a category: 1
Choose a difficulty (Easy, Medium, Hard): Easy

Question 1: What planet is known as the Red Planet?
1. Earth
2. Mars
3. Jupiter

Your answer: 2
Correct!

Your current score is 1.

Would you like to play again? (Yes/No)
```
