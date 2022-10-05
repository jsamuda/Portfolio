var playerXTurn = true;
var choices = document.getElementsByClassName("choice");

const winningCombinations = [
    ["0","1","2"],
    ["3","4","5"],
    ["6","7","8"],
    ["0","3","6"],
    ["1","4","7"],
    ["2","5","8"],
    ["0","4","8"],
]
var makeMove = function() {
    if(playerXTurn){
        this.innerHTML = "X";
        playerXChoices.push(this.getAttribute("id"));
        playerXTurn = !playerXTurn;
        if (checkWinner(playerXChoices)) {
            console.log('bloop')
            alert('Player X wins');
        }
        console.log(playerXChoices);
    }
    else{
        this.innerHTML = "O";
        playerOChoices.push(this.getAttribute("id"));
        playerXTurn = !playerXTurn;
        if (checkWinner(playerOChoices)) {
            alert('player O wins');
        }
        console.log(playerOChoices);
    }
};

for (var i = "0"; i < choices.length; i++) {
    choices[i].addEventListener('click', makeMove, {once: true});
}

var playerXChoices = [];
var playerOChoices = [];

function togglePlayer(){
    if(playerXTurn){
        playerXTurn = !playerXTurn;
    }
}

function disableAll(){
    alert(choices.length)
    for (var i = 0; i < choices.length; i++) {
        var bloop = choices[i].getAttribute("id");
        document.getElementById(bloop).classList.add('disable')
    }
}

function checkWinner(options){
    winningCombinations.forEach(combo => {
        if(combo.every(r => options.includes(r))){
            if(playerXTurn){
                alert('player o wins');
                disableAll();
                console.log("o found");
            }else{
                alert('player x wins')
                disableAll();
                console.log("X found");
            }
            return true;
        }
    });
}

