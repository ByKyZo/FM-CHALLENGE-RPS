// RULES
const btnRules = document.querySelector("#btn-rules");
const rules = document.querySelector("#rules");
const closeRules = document.querySelector("#close");

btnRules.addEventListener("click", () => rules.classList.remove("d-none"))
closeRules.addEventListener("click", () => rules.classList.add("d-none"))
/////////////////////

let score = 0;

const game = document.querySelector("#game")
const scoreDisplay = document.querySelector("#score");

fScoreDisplay();

function fScoreDisplay (){
    scoreDisplay.innerHTML = score;
}

let botHand = 0;
let playerHand = 0;

game.addEventListener("click", (e) => {

    if (e.target.id === "paper" || e.target.parentNode.id === "paper"){

        playerHand = 1

        startFight()

    } else if (e.target.id === "scissors" || e.target.parentNode.id === "scissors"){

        playerHand = 2

        startFight()

    } else if (e.target.id === "rock" || e.target.parentNode.id === "rock"){

        playerHand = 3

        startFight()

    } else if (e.target.id === "playAgain"){
        fightArea.innerHTML = "";
        fightArea.classList.remove("animationRoundEnd");
        fightArea.classList.add("d-none");
        gameContent.classList.remove("d-none");
    }


})

const gameContent = document.querySelector("#game-content");
const fightArea = document.querySelector("#fight-area");

function startFight () {

    displayFight();

    setTimeout (() => {

        const isWin = document.createElement("div");
        isWin.classList.add("popupWinOrLoose")
    
        if (playerHand === 1 && botHand === 3 ){
    
            isWin.innerHTML = "<span>you win</span>";
            score++;
            handPlayerDisplay.classList.add("animatedWin");
    
        } else if (playerHand === 3 && botHand === 2){
    
            isWin.innerHTML = "<span>you win</span>";
            score++;
            handPlayerDisplay.classList.add("animatedWin");
    
        } else if (playerHand === 2 && botHand === 1){
    
            isWin.innerHTML = "<span>you win</span>";
            score++;
            handPlayerDisplay.classList.add("animatedWin");
    
        } else if (botHand === 1 && playerHand === 3 ){
    
            isWin.innerHTML = "<span>you lose</span>";
            score--;
            handBotDisplay.classList.add("animatedWin");
    
        } else if (botHand === 3 && playerHand === 2){
    
            isWin.innerHTML = "<span>you lose</span>";
            score--;
            handBotDisplay.classList.add("animatedWin");
    
        } else if (botHand === 2 && playerHand === 1){
    
            isWin.innerHTML = "<span>you lose</span>";
            score--;
            handBotDisplay.classList.add("animatedWin");
    
        } else {
            isWin.innerHTML = "<span>game tie</span>";
        }

        fScoreDisplay();
    
        isWin.innerHTML += "<button id='playAgain'>play again</button>"

        fightArea.classList.add("animationRoundEnd");
    
        fightArea.insertBefore(isWin,handBotDisplay);
    
    }, 3200)
}

let handPlayerDisplay = document.createElement("div");
let handBotDisplay = document.createElement("div");
// A OPTIMISER
function displayFight () {
    botHand = Math.floor(Math.random() * 3 + 1);

    handPlayerDisplay = document.createElement("div");
    handBotDisplay = document.createElement("div");

    fightArea.classList.remove("d-none");
    gameContent.classList.add("d-none");

    handPlayerDisplay.classList.add("handPlayPlayer");

    switch (playerHand){
        case 1:
            handPlayerDisplay.classList.add("paper-hand");
            handPlayerDisplay.innerHTML = '<img src="./images/icon-paper.svg" alt="">'
            fightArea.appendChild(handPlayerDisplay);
        break;
        case 2:
            handPlayerDisplay.classList.add("scissors-hand");
            handPlayerDisplay.innerHTML = '<img src="./images/icon-scissors.svg" alt="">'
            fightArea.appendChild(handPlayerDisplay);
        break;
        case 3:
            handPlayerDisplay.classList.add("rock-hand");
            handPlayerDisplay.innerHTML = '<img src="./images/icon-rock.svg" alt="">'
            fightArea.appendChild(handPlayerDisplay);
        break;
    }

    const placeHolderBot = document.createElement("div");
    placeHolderBot.classList.add("botPlaceHolder");
    fightArea.appendChild(placeHolderBot);

    handBotDisplay.classList.add("handPlayBot");

    setTimeout (()=>{
        
        fightArea.removeChild(placeHolderBot);

        switch (botHand){
            case 1:
                handBotDisplay.classList.add("paper-hand");
                handBotDisplay.innerHTML = '<img src="./images/icon-paper.svg" alt="">'
                fightArea.appendChild(handBotDisplay);
            break;
            case 2:
                handBotDisplay.classList.add("scissors-hand");
                handBotDisplay.innerHTML = '<img src="./images/icon-scissors.svg" alt="">'
                fightArea.appendChild(handBotDisplay);
            break;
            case 3:
                handBotDisplay.classList.add("rock-hand");
                handBotDisplay.innerHTML = '<img src="./images/icon-rock.svg" alt="">'
                fightArea.appendChild(handBotDisplay);
            break;
        }

    }, 1500)
}

// A FAIRE

// function ManageDisplay (namePlayer) {
//         switch (botHand){
//             case 1:
//                 handBotDisplay.classList.add("paper-hand");
//                 handBotDisplay.innerHTML = '<img src="./images/icon-paper.svg" alt="">'
//                 fightArea.appendChild(handBotDisplay);
//             break;
//             case 2:
//                 handBotDisplay.classList.add("scissors-hand");
//                 handBotDisplay.innerHTML = '<img src="./images/icon-scissors.svg" alt="">'
//                 fightArea.appendChild(handBotDisplay);
//             break;
//             case 3:
//                 handBotDisplay.classList.add("rock-hand");
//                 handBotDisplay.innerHTML = '<img src="./images/icon-rock.svg" alt="">'
//                 fightArea.appendChild(handBotDisplay);
//             break;
//         }
// }






