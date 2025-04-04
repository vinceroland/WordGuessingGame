const words = ["apple", "banana", "grape", "mango", "peach", "orange", "kiwi"];
let secretWord = words[Math.floor(Math.random() * words.length)];
let attemptsLeft = 5;

console.log("Secret word (for testing):", secretWord);

function submitGuess() {
  const input = document.getElementById("userGuess");
  const message = document.getElementById("message");
  const restartBtn = document.querySelector("button[onclick='restartGame()']");
  const body = document.body;
  let guess = input.value.trim().toLowerCase();

  if (guess === secretWord) {
    message.textContent = "Congratulations! You guessed the secret word!";
    message.style.color = "green";
    input.style.border = "2px solid green";
    input.disabled = true;
    restartBtn.style.display = "inline-block";

    body.classList.add("green");
    setTimeout(() => body.classList.remove("green"), 1000);
  } else {
    attemptsLeft--;
    input.style.border = "2px solid red";
    if (attemptsLeft > 0) {
      if (attemptsLeft === 3) {
        message.textContent = guess
          ? `Incorrect guess. Here's a hint: The word starts with '${secretWord[0]}'. You have ${attemptsLeft} attempts left.`
          : `Invalid input. Here's a hint: The word starts with '${secretWord[0]}'. You have ${attemptsLeft} attempts left.`;
      } else {
        message.textContent = guess
          ? `Incorrect guess. You have ${attemptsLeft} attempts left. Try again!`
          : `Invalid input. You have ${attemptsLeft} attempts left. Try again!`;
      }
      message.style.color = "red";
    } else {
      message.textContent = `Game over! The secret word was '${secretWord}'.`;
      message.style.color = "darkred";
      input.disabled = true;
      restartBtn.style.display = "inline-block";
    }

    body.classList.add("red");
    setTimeout(() => body.classList.remove("red"), 1000);
  }
  input.value = "";
}

function restartGame() {
  secretWord = words[Math.floor(Math.random() * words.length)];
  attemptsLeft = 5;
  document.getElementById("userGuess").value = "";
  document.getElementById("userGuess").disabled = false;
  document.getElementById("message").textContent = "";
  document.querySelector("button[onclick='restartGame()']").style.display = "none";
  console.log("New secret word (for testing):", secretWord);
}

const inputBox = document.getElementById("userGuess");
inputBox.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    submitGuess();
  }
});
