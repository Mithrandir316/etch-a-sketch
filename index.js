let divContainer = document.querySelector(".container");
let randomColorBtn = document.querySelector("#random-color-btn");
let darkEffectBtn = document.querySelector("#dark-effect-btn");
let gridButton = document.querySelector("#grid-size-btn");
let rgbMode = false;
let darkMode = false;
let opacity = 0.1;

createGrid(16);

function createGrid(size) {
  for (let i = 0; i < size; i++) {
    let subContainer = document.createElement("div");
    for (let j = 0; j < size; j++) {
      subContainer.classList.add("sub-container");
      let gridDiv = document.createElement("div");
      gridDiv.classList.add("grid-div");
      subContainer.appendChild(gridDiv);
      gridDiv.addEventListener("mouseover", draw);
    }

    divContainer.appendChild(subContainer);
  }
}

function draw(e) {
  if (rgbMode) {
    e.target.setAttribute("style", `background: ${getRandomColor()}`);
  } else if (darkMode) {
    opacity += 0.1;
    e.target.setAttribute("style", `background: black; opacity: ${opacity}`);
  } else {
    e.target.setAttribute("style", "background: black;");
  }
}

function getRandomColor() {
  let colorRed = Math.random() * 256;
  let colorGreen = Math.random() * 256;
  let colorBlue = Math.random() * 256;
  return `rgb(${colorRed}, ${colorGreen}, ${colorBlue})`;
}

gridButton.addEventListener("click", () => {
  let message = +prompt("Tell me size of the grid. It might be from 1 to 100");
  divContainer.textContent = "";
  if (message > 100) {
    return (message = "Sorry. Type another number from 1 to 100");
  } else {
    return createGrid(message);
  }
});

randomColorBtn.addEventListener("click", () => {
  rgbMode = !rgbMode;
  if (rgbMode) {
    randomColorBtn.textContent = "Rainbow Mode ON";
    darkMode = false;
    darkEffectBtn.textContent = "Dark Effect OFF";
  } else {
    randomColorBtn.textContent = "Rainbow Mode OFF";
  }
});

darkEffectBtn.addEventListener("click", () => {
  darkMode = !darkMode;
  if (darkMode) {
    darkEffectBtn.textContent = "Dark Effect ON";
    rgbMode = false;
    randomColorBtn.textContent = "Rainbow Mode OFF";
  } else {
    darkEffectBtn.textContent = "Dark Effect OFF";
  }
});



