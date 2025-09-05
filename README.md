# Quiz App

A **React-based Quiz Application** that allows users to take quizzes on various topics like Java, SQL, and more. The app displays questions, allows selecting answers, shows results immediately after submission with proper feedback, and highlights correct/incorrect answers.

The app is fully responsive and uses **Tailwind CSS** for styling with a modern UI.

---

## Table of Contents

* [Features](#features)
* [Demo](#demo)
* [Technologies Used](#technologies-used)
* [Project Structure](#project-structure)
* [Installation](#installation)
* [Usage](#usage)
* [Quiz Functionality](#quiz-functionality)
* [Screenshots](#screenshots)
* [Contributing](#contributing)
---

## Features

* Multiple quizzes with dynamic questions
* User-friendly interface
* Selectable answers with immediate feedback
* Highlights correct answers in green and wrong answers in red after submission
* Score calculation with performance-based messages
* Result modal with clear score display
* Responsive design for all device sizes
* Option to add more quizzes easily

---

## Demo

> You can deploy this app on **Netlify**, **Vercel**, or **GitHub Pages**.

Example:
[Quiz App Demo](#)

---

## Technologies Used

* **Frontend:** React.js, Tailwind CSS
* **Routing:** React Router DOM
* **State Management:** useState (React Hooks)
* **Design:** Modern UI with gradients, shadows, and responsive layout

---

## Project Structure

```
quiz-app/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── LandingPage.jsx
│   │   ├── QuizePage.jsx
│   │   ├── QuizzPrompt.jsx
│   │   ├── Signup.jsx
│   │   └── Login.jsx
│   │
│   ├── App.jsx
│   ├── index.js
│   └── tailwind.css
│
├── package.json
└── README.md
```

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/dsmundhe/Quizzer-App.git
```

2. Navigate to the project folder:

```bash
cd Quizzer
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

The app will run on [http://localhost:3000](http://localhost:3000)

---

## Usage

1. Open the app in your browser.
2. On the **Landing Page**, browse available quizzes.
3. Click **Start Quiz** to open the selected quiz.
4. Select answers for each question.
5. Click **Submit Quiz** to view results.

   * Correct answers will be highlighted in **green**.
   * Incorrectly selected answers will be highlighted in **red**.
6. View your score and performance message in the result modal.
7. Optionally, use the **Quiz Prompt Generator** to create new quiz JSON prompts.

---

## Quiz Functionality

* Each quiz is stored as a JSON object with the following structure:

```json
{
  "title": "Java Quiz",
  "topic": "Java Basics",
  "questions": [
    {
      "question": "What is the default value of a local variable in Java?",
      "options": ["null", "0", "Depends on type", "No default value"],
      "answer": "No default value"
    }
  ]
}
```

* Features:

  * Each question has **exactly 4 options**.
  * Only **one correct answer** per question.
  * Users cannot change answers after submission.
  * Correct answers are highlighted green; wrong selections are red.
  * Dynamic scoring and feedback messages.

---

## Screenshots

### Landing Page

![Landing Page](screenshots/landing.png)

### Quiz Page

![Quiz Page](screenshots/quiz.png)

### Result Modal

![Result Modal](screenshots/result.png)

---

## Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m "Add YourFeature"`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---
