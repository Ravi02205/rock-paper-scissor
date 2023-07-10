const btns = [...document.getElementsByClassName('btn')];
const player = document.getElementById("player");
const computer = document.getElementById("computer");
const result = document.getElementById("result");

const showResult = (e) => {
    let value = e.target.dataset.value;
    let arr = ["rock", "paper", "scissor"];
    let computerValue = arr[Math.round(Math.random() * (arr.length - 1))];
    player.innerText = "Your Choice: " + value;
    computer.innerText = "Computer Choice: " + computerValue;
    if (computerValue == value) {
        result.innerText = "Result : You Got a Tie !! ";
    } else if ((computerValue == "rock" && value == "paper") || (computerValue == "paper" && value == "scissor") || (computerValue == "scissor" && value == "rock")) {
        result.innerText = "Result : You Got a win !! ";
    } else {
        result.innerText = "Result : You Got a lose !! ";
    }

}

btns.map(element => element.addEventListener('click', showResult));