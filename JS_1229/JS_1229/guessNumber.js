// Global variables
let secretNumber = generateRandomNumber();

// 4. Function to generate a random number between 1 and 10
function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// Function to check the user's guess
function checkGuess() {
  let userGuess = parseInt(document.getElementById("userGuess").value); // Convert user input to a number
  let resultElement = document.getElementById("result");

  if (userGuess === secretNumber) {
    // If the answer is correct
    resultElement.textContent = "Congratulations! You guessed the correct number!";
    showImageAndPlaySound("picture2.jpeg", "music2.mp3");
    
    // Generate a new random number for the next round
    secretNumber = generateRandomNumber();
  } else {
    // If the answer is wrong
    resultElement.textContent = "Sorry, try again!";
    showImageAndPlaySound("picture1.jpeg", "music1.mp3");
  }

  document.getElementById("userGuess").value = "";
}

function handleKeyPress(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    checkGuess();
  }
}

// Function to show image and play sound
function showImageAndPlaySound(imageSource, soundSource) {
  let imageElement = document.createElement("img");
  imageElement.src = imageSource;

  let soundElement = document.createElement("audio");
  soundElement.src = soundSource;
  soundElement.autoplay = true;

  let resultContainer = document.getElementById("result");
  resultContainer.innerHTML = "";
  resultContainer.appendChild(imageElement);
  resultContainer.appendChild(soundElement);
}
