const movieQuestions = [
  {
    title: "How many Harry Potter films are released?",
    options: ["3", "6", "8", "10"],
    correctAnswer: "8",
  },
  {
    title: "How many Back to the Future films are released?",
    options: ["2", "3", "1", "5"],
    correctAnswer: "3",
  },
  {
    title: "How many Rocky films are released?",
    options: ["1", "3", "4", "6"],
    correctAnswer: "6",
  },
];

const constructOptions = function (options) {
  const optionsContainer = document.createElement("div");
  optionsContainer.setAttribute("class", "options-container");

  for (let i = 0; i < options.length; i++) {
    // get the current option from array
    const option = options[i];

    // create my button
    const optionButton = document.createElement("button");
    optionButton.setAttribute("class", "option-item");
    optionButton.textContent = option;

    // append to optionsContainer
    optionsContainer.appendChild(optionButton);
  }

  return optionsContainer;
};

const constructQuestionContainer = function (question) {
  // construct container div
  const questionContainer = document.createElement("div");
  questionContainer.setAttribute("class", "container question-container");

  // construct h2 element
  const questionH2 = document.createElement("h2");
  questionH2.setAttribute("class", "question");
  questionH2.textContent = question.title;

  // construct options div
  const options = constructOptions(question.options);

  // appending h2 and options div to container div
  questionContainer.append(questionH2, options);

  return questionContainer;
};

// render question container
const renderQuestionContainer = function () {
  // get the current question
  const currentQuestion = movieQuestions[0];

  // construct the HTML for the question container
  const questionContainer = constructQuestionContainer(currentQuestion);

  // append the container to the document
  document.getElementById("main-container").appendChild(questionContainer);
};

const removeStartContainer = function () {
  // target start container
  const startContainer = document.getElementById("start-container");
  // remove from document
  startContainer.remove();
};

// function to execute when start button is called
const startQuiz = function () {
  console.log("start quiz");
  // remove start container
  removeStartContainer();

  // render question container
  renderQuestionContainer();
};

// target the start quiz button
const startButton = document.getElementById("start-quiz");

// add a click event listener and start quiz
startButton.addEventListener("click", startQuiz);
