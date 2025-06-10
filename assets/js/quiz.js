/* jshint esversion: 11 */
const questions = [
  {
    question: "What kind of weather do you prefer?",
    options: [
      { text: "Sunny and warm", points: 3 },
      { text: "Cool and breezy", points: 2 },
      { text: "Cold and snowy", points: 1 },
      { text: "Hot and humid", points: 4 }
    ]
  },
  {
    question: "What's your favorite activity?",
    options: [
      { text: "Sightseeing and culture", points: 2 },
      { text: "Outdoor adventure", points: 4 },
      { text: "Food and nightlife", points: 3 },
      { text: "Relaxing on a beach", points: 1 }
    ]
  },
  {
    question: "What's your ideal vacation vibe?",
    options: [
      { text: "Exploring historic streets", points: 2 },
      { text: "Sunbathing on exotic beaches", points: 4 },
      { text: "Trekking through nature", points: 3 },
      { text: "Hopping trendy cafes", points: 1 }
    ]
  },
  {
    question: "Pick your preferred meal:",
    options: [
      { text: "Sushi platter", points: 3 },
      { text: "Pasta and wine", points: 2 },
      { text: "Street food feast", points: 4 },
      { text: "Fish & chips", points: 1 }
    ]
  },
  {
    question: "Your favorite type of accommodation?",
    options: [
      { text: "Chic city hotel", points: 1 },
      { text: "Eco-lodge in the jungle", points: 4 },
      { text: "Beach resort with cocktails", points: 3 },
      { text: "Quaint bed & breakfast", points: 2 }
    ]
  }
];

const destinationBuckets = [
  { min: 0, max: 7, destinations: ["Paris", "Berlin", "Rome", "Madrid"] },
  { min: 8, max: 11, destinations: ["Dublin", "London", "Cape Town", "Sydney"] },
  { min: 12, max: 15, destinations: ["Tokyo", "Seoul", "Beijing", "Bangkok"] },
  { min: 16, max: 20, destinations: ["Bali", "Maldives", "Havana", "Rio de Janeiro"] }
];

let currentQuestion = 0;
let totalScore = 0;
// Container element where the quiz will be rendered
const quizContainer = document.getElementById("quiz-container");
// Function to display the current question and options
function showQuestion() {
  const q = questions[currentQuestion];
  const progress = ((currentQuestion / questions.length) * 100).toFixed(0);
// Update the quiz container HTML with progress bar, question text, and options buttons
  quizContainer.innerHTML = `
    <div class="progress-bar-container">
      <div class="progress-bar-fill" style="width: ${progress}%"></div>
    </div>
    <div class="question">${q.question}</div>
    <div class="options">
      ${q.options.map(opt => 
        `<button onclick="selectOption(${opt.points})">${opt.text}</button>`
      ).join("")}
    </div>
  `;
}

function selectOption(points) {
  totalScore += points;
  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

// Function to display the final quiz result based on totalScore
function showResult() {
  const matched = destinationBuckets.find(bucket =>
    totalScore >= bucket.min && totalScore <= bucket.max
  );

  const destination = matched ?
  matched.destinations[Math.floor(Math.random() * matched.destinations.length)] :
  "Somewhere mysterious... 🤫";

// Display the total score, recommended destination, and a restart button
  quizContainer.innerHTML = `
    <div class="result">
      <p>Your total score: <strong>${totalScore}</strong></p>
      <p>Your recommended destination is: <strong>${destination}</strong></p>
      <button class="restart-button" onclick="restartQuiz()">Restart Quiz</button>
    </div>
  `;
}

function restartQuiz() {
  currentQuestion = 0;
  totalScore = 0;
  showQuestion();
}

// Start the quiz
showQuestion();
