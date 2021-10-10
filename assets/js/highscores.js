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

  // render highscores
  renderHighscores(highscores);
};

window.addEventListener("load", onLoad);
