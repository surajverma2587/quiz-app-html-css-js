const getFromLocalStorage = function (key, defaultValue) {
  const localStorageData = JSON.parse(localStorage.getItem(key));

  if (!localStorageData) {
    return defaultValue;
  } else {
    return localStorageData;
  }
};

const renderHighscores = function (highscores) {
  // construct ul
  const ulElement = document.createElement("ul");
  ulElement.setAttribute("class", "highscores-list");
  ulElement.setAttribute("id", "highscores-list");

  for (let i = 0; i < highscores.length; i++) {
    // get current highscore
    const highscore = highscores[i];

    // construct li
    const liElement = document.createElement("li");
    liElement.setAttribute("class", "highscore-container");

    // construct initials
    const initialsDiv = document.createElement("div");
    initialsDiv.textContent = highscore.initials;

    // construct score
    const scoreDiv = document.createElement("div");
    scoreDiv.textContent = highscore.score;

    // append divs to li
    liElement.append(initialsDiv, scoreDiv);

    // append li to ul
    ulElement.appendChild(liElement);
  }

  // append ul to div #high-scores
  document.getElementById("high-scores").append(ulElement);
};

const onLoad = function () {
  // get highscores from local storage
  const highscores = getFromLocalStorage("highscores", []);

  if (highscores.length === 0) {
    renderNoScores();
  } else {
    // render highscores
    renderHighscores(highscores);
  }
};

// target buttons
const goBackBtn = document.getElementById("go-back-btn");
const clearScoresBtn = document.getElementById("clear-scores-btn");

const goBack = function () {
  location.assign("/index.html");
};

const clearScores = function () {
  // remove form local storage
  localStorage.removeItem("highscores");

  // remove high scores container
  document.getElementById("highscores-list").remove();

  // render the no scores component
  renderNoScores();
};

const renderNoScores = function () {
  // construct no scores component
  const divContainer = document.createElement("div");
  divContainer.setAttribute("class", "container game-over");

  const h2Element = document.createElement("h2");
  h2Element.textContent = "No High Scores";

  divContainer.append(h2Element);

  // append no scores component
  document.getElementById("high-scores").append(divContainer);
};

// add event listeners
goBackBtn.addEventListener("click", goBack);
clearScoresBtn.addEventListener("click", clearScores);

window.addEventListener("load", onLoad);
