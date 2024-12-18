const questions = [
    {
      question: "Which of these is false about Nadir?",
      options: ["It is 180 degrees from Zenith", "It is 80 degrees away from Azimuth", "It is the lowest point of the Earth", "It is the highest point of Earth"],
      correct: 2,
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correct: 1,
    },
    {
      question: "Which month is Shravan in the Gregorian calendar?",
      options: ["July-Aug", "Nov-Dec", "April-May", "Sept-Oct"],
      correct: 0,
    },
    {
      question: "How many Degrees is a Tithi?",
      options: ["18", "15", "14", "12"],
      correct: 3,
    },
    {
        question: "What does ahargana mean?",
        options: ["Count of Days", "No. of Revolutions", "Equinox", "Eclipse"],
        correct: 0,
      },
      {
        question: "Which of these is a part of Indian Calendar System?",
        options: ["Karana", "Tantra", "Kali", "Muhurta"],
        correct: 0,
      },
      {
        question: "Which of these is not an Indian Astronomical instrument??",
        options: ["Sanku", "Nara", "Vara", "Gola-Yantra"],
        correct: 2,
      },
      {
        question: "Who introduced the concept of planetary astronomy?",
        options: ["Aryabhatiya", "Pingala", "Panini", "Bhaskara 1"],
        correct: 3,
      },
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const optionsEl = document.querySelectorAll(".option");
  const scoreSection = document.getElementById("score-section");
  const questionSection = document.getElementById("question-section");
  const scoreEl = document.getElementById("score");
  const restartBtn = document.getElementById("restart-btn");
  
  function loadQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.forEach((btn, index) => {
      btn.textContent = q.options[index];
      btn.onclick = () => checkAnswer(index);
    });
  }
  
  function checkAnswer(selectedIndex) {
    if (selectedIndex === questions[currentQuestion].correct) {
      alert("Correct! 🎉");
      score++;
    } else {
      alert("Wrong! ❌");
    }
  
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      endQuiz();
    }
  }
  
  function endQuiz() {
    questionSection.style.display = "none";
    scoreSection.style.display = "block";
    scoreEl.textContent = `${score} / ${questions.length}`;
  }
  
  restartBtn.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    questionSection.style.display = "block";
    scoreSection.style.display = "none";
    loadQuestion();
  });
  
  loadQuestion();
  