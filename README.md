# 🎟️ Lottery Game

A simple Lottery Game built with React and Vite. The application generates a random lottery ticket and checks whether the ticket satisfies a winning condition.

## Features

* Generate a random lottery ticket
* Buy a new ticket with a single click
* Customizable winning condition
* Built using React Hooks (`useState`)
* Fast development setup with Vite

## Project Structure

```text
src/
├── App.jsx
├── Lottery.jsx
├── Ticket.jsx
├── helper.js
├── Lottery.css
└── main.jsx
```

## How It Works

1. A ticket containing random numbers is generated using the `generateNum()` function.
2. The ticket is displayed through the `Ticket` component.
3. A winning condition is passed as a prop to the `Lottery` component.
4. If the ticket satisfies the winning condition, a congratulatory message is displayed.
5. Clicking **New Ticket** generates a new random ticket.


## Technologies Used

* React
* JavaScript (ES6+)
* Vite
* CSS

## Learning Objectives

This project demonstrates:

* React Functional Components
* Props
* State Management with `useState`
* Event Handling
* Conditional Rendering
* Component Reusability

## Future Enhancements

* Multiple winning rules
* Score tracking
* Ticket history
* Better UI and animations
* Difficulty levels

## Author

Mahi Verma

Built as a React learning project.
