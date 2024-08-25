# Pokémon Memory Game

## Project Overview

This project is a Pokémon-themed memory game built with React. The game challenges users to click on different Pokémon cards without clicking the same one twice. The score increases with each unique card clicked, and the "Best Score" keeps track of the highest score achieved during the session. The cards shuffle each time a card is clicked, adding a layer of difficulty to the game.

## Features

- **Scoreboard**: Displays the current score and the best score achieved so far.
- **Randomized Cards**: Cards are shuffled every time the user clicks on one, making it harder to remember which cards have already been clicked.
- **Pokémon Cards**: Pokémon images and information are fetched from an external API and displayed on cards.
- **Responsive Design**: The game is styled and responsive, making it enjoyable to play on various screen sizes.

## Project Structure

The project is organized into the following components:

### Components

1. **App_container**: 
   - Manages the state of the application, including the current score, best score, and the list of selected Pokémon.
   - Renders the `Header` and `Cards_container` components.
   - Handles the logic for incrementing the score.

2. **Header**:
   - Contains a static title element.
   - Renders the `Scoreboard` component, passing down the current score and best score as props.

3. **Scoreboard**:
   - Displays the current score and best score.
   - Receives the score data as props from the `App_container` through the `Header`.

4. **Cards_container**:
   - Holds the API data and creates Pokémon objects on mount by fetching information from an external API.
   - Implements the function to shuffle the cards, which is passed down to the `Card` component.

5. **Card**:
   - Displays individual Pokémon cards.
   - When clicked, it triggers the increment score function from the `App_container`, shuffles the cards, and adds the selected Pokémon to the list of selected Pokémon in the `App_container`.

## External API

The Pokémon data, including images and information, is fetched from an external API. This data is used to populate the cards displayed in the game.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Milosavljevichh/cat_card_game.git
   ```
2. Navigate to the project directory:
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment

The project is deployed and can be accessed online. To deploy the project, follow these steps:

1. Build the project for production:
   ```bash
   npm run build
   ```
2. Deploy the `build` directory to your preferred hosting service.

## Conclusion

This project demonstrates the use of React components, state management, and API integration to create an interactive and enjoyable memory game. The application is also styled to provide a visually appealing user experience.

Feel free to explore the code, and enjoy playing the Pokémon Memory Game!