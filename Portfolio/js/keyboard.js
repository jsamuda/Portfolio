var streak = 0;
var score = 0;
var oneMinute = 60 * 1;
var display = document.querySelector('#time');
var gameStarted = false;z                   

function startTimer(duration, display) {
    gameStarted = true;
    var timer = duration, minutes, seconds;
    var myInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display = document.querySelector('#time');
        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            var scoreMessage = document.querySelector(".scoreMessage");
            scoreMessage.innerHTML = "Your final score was " + score + "!"
            gameStarted = false
            clearInterval(myInterval)
            var playAgainButton = document.getElementById("playAgain");
            playAgainButton.style.display = ''
        }
    }, 1000);
}

function getInput(e){
    if (!gameStarted) {
        var oneMinute = 60 * 1;
        var display = document.querySelector('#time');
        startTimer(oneMinute, display);
            display = document.querySelector('#time');
    }
    var letterElement = document.querySelector(".letter");
    var streakNumber = document.querySelector(".streakNumber");
    if (e.slice(-1)==letterElement.innerHTML) {
        streak++
        streakNumber.innerHTML = streak
        score++
        var scoreNumber = document.querySelector(".scoreNumber");
        scoreNumber.innerHTML = score
        getRandomLetter()
    }
    else{
        streak = 0
        streakNumber.innerHTML = streak
    }
    const allButtons = document.querySelectorAll(".col");
    allButtons.forEach(button => {
        button.classList.remove("active");
    });
    var activeKey = document.getElementById(e.slice(-1));
    activeKey.classList.add("active");
}

function getRandomLetter(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
    var letterElement = document.querySelector(".letter");
    letterElement.innerHTML = randomCharacter;
    return randomCharacter;
}

function resetGame(){
    gameStarted = false;
}