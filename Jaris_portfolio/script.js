let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const gameHint = document.getElementById('gameHint');
    const attemptCount = document.getElementById('attemptCount');
    const userGuess = parseInt(guessInput.value);

    // Validasi input
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        gameHint.innerText = "❌ Please enter a number between 1 and 100!";
        gameHint.style.color = "#ef4444";
        return;
    }

    attempts++;
    attemptCount.innerText = attempts;

    // Logik tekaan
    if (userGuess === secretNumber) {
        gameHint.innerText = `🎉 Correct! The number was ${secretNumber}.`;
        gameHint.style.color = "#34d399";
    } else if (userGuess > secretNumber) {
        gameHint.innerText = "Too High ⬆️ Try again.";
        gameHint.style.color = "#f43f5e";
    } else {
        gameHint.innerText = "Too Low ⬇️ Try again.";
        gameHint.style.color = "#60a5fa";
    }
}

function resetGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('attemptCount').innerText = "0";
    document.getElementById('gameHint').innerText = "Start guessing...";
    document.getElementById('gameHint').style.color = "#60a5fa";
    document.getElementById('guessInput').value = "";
}