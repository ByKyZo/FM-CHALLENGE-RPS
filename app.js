// RULES
document.querySelector("#btn-rules").addEventListener("click", () => document.querySelector("#rules").classList.remove("d-none"))
document.querySelector("#close").addEventListener("click", () => document.querySelector("#rules").classList.add("d-none"))
/////////////////////
const game = document.querySelector("#game")
const switchGame = document.querySelector("#switchGame");
const gameContent = document.querySelector("#game-content");
const gameLizardSpock = document.querySelector("#game-content-lizard-spock");
const fightArea = document.querySelector("#fight-area");
const scoreDisplay = document.querySelector("#score");

let score = 0;
let botHand = 0;
let playerHand = 0;

fScoreDisplay();

function fScoreDisplay (){
    scoreDisplay.innerHTML = score;
}

game.addEventListener("click", (e) => {
    
    if (e.target.classList.contains("paper") || e.target.parentNode.classList.contains("paper")){
        playerHand = 1
        startFight()

    } else if (e.target.classList.contains("scissors") || e.target.parentNode.classList.contains("scissors")){
        playerHand = 2
        startFight()

    } else if (e.target.classList.contains("rock") || e.target.parentNode.classList.contains("rock")){
        playerHand = 3
        startFight()

    }  else if (e.target.classList.contains("lizard") || e.target.parentNode.classList.contains("lizard")){
        playerHand = 4
        startFight()

    } else if (e.target.classList.contains("spock") || e.target.parentNode.classList.contains("spock")){
        playerHand = 5
        startFight()

    } else if (e.target.id === "playAgain"){
        fightArea.innerHTML = "";
        fightArea.classList.remove("animationRoundEnd");
        fightArea.classList.add("d-none");
        if (!switchGame.classList.contains("active")){
            gameContent.classList.remove("d-none");
        } else {
            gameLizardSpock.classList.remove("d-none");
        }
    }

    if (e.target.id === "switchGame" || e.target.parentNode.id === "switchGame") {

        switchGame.classList.toggle("active")

        document.querySelector(".indicator").classList.add("d-none");

        if (switchGame.classList.contains("active")){ 
    
            if (fightArea.classList.contains("d-none")){
                gameContent.classList.add("d-none")
                gameLizardSpock.classList.remove("d-none");
            }
            document.querySelector("#imgGame").setAttribute("src","./images/logo-bonus.svg")
            document.querySelector("#imgRules").setAttribute("src","./images/image-rules-bonus.svg")
    
        } else {
    
            if (fightArea.classList.contains("d-none")){
                gameContent.classList.remove("d-none")
                gameLizardSpock.classList.add("d-none");
            }
            document.querySelector("#imgGame").setAttribute("src","./images/logo.svg")
            document.querySelector("#imgRules").setAttribute("src","./images/image-rules.svg")
        }
    }

})
// WIN CONDITION 
function startFight () {

    displayFight();

    setTimeout (() => {

        const isWin = document.createElement("div");
        isWin.classList.add("popupWinOrLoose")
    
        if ((playerHand === 1 && botHand === 3) || 
            (playerHand === 3 && botHand === 2) ||
            (playerHand === 2 && botHand === 1) ||
            (playerHand === 3 && botHand === 4) ||
            (playerHand === 4 && botHand === 5) ||
            (playerHand === 5 && botHand === 2) ||
            (playerHand === 2 && botHand === 4) ||
            (playerHand === 1 && botHand === 5) ||
            (playerHand === 4 && botHand === 1) ||
            (playerHand === 5 && botHand === 3)){
    
            isWin.innerHTML = "<span>you win</span>";
            score++;
            handPlayerDisplay.classList.add("animatedWin");
    
        } else if ((botHand === 1 && playerHand === 3) ||
                   (botHand === 3 && playerHand === 2) ||
                   (botHand === 2 && playerHand === 1) ||
                   (botHand === 3 && playerHand === 4) ||
                   (botHand === 4 && playerHand === 5) ||
                   (botHand === 5 && playerHand === 2) ||
                   (botHand === 2 && playerHand === 4) ||
                   (botHand === 1 && playerHand === 5) ||
                   (botHand === 4 && playerHand === 1) ||
                   (botHand === 5 && playerHand === 3)){
    
            isWin.innerHTML = "<span>you lose</span>";
            score--;
            handBotDisplay.classList.add("animatedWin");
    
        } else {
            isWin.innerHTML = "<span>game tie</span>";
        }

        fScoreDisplay();
    
        isWin.innerHTML += "<button id='playAgain'>play again</button>"

        fightArea.classList.add("animationRoundEnd");

        setTimeout (() =>{
            fightArea.insertBefore(isWin,handBotDisplay);
        },250)
    
    }, 3200)
}

let handPlayerDisplay = document.createElement("div");
let handBotDisplay = document.createElement("div");

function displayFight () {

    if (!switchGame.classList.contains("active")){
        botHand = Math.floor(Math.random() * 3 + 1);
    } else {
        botHand = Math.floor(Math.random() * 5 + 1);  
    }

    handPlayerDisplay = ManageDisplay(playerHand);
    handBotDisplay = ManageDisplay(botHand);

    fightArea.classList.remove("d-none");
    gameContent.classList.add("d-none");
    gameLizardSpock.classList.add("d-none");

    handPlayerDisplay.classList.add("handPlayPlayer");


    fightArea.appendChild(handPlayerDisplay);

    const placeHolderBot = document.createElement("div");
    placeHolderBot.classList.add("botPlaceHolder");
    fightArea.appendChild(placeHolderBot);

    handBotDisplay.classList.add("handPlayBot");

    setTimeout (()=>{
        
        fightArea.removeChild(placeHolderBot);

        fightArea.appendChild(handBotDisplay);

    }, 1500)
}

function ManageDisplay (namePlayer) {

        const handZ = document.createElement("div");
        
        switch (namePlayer){
            case 1:
                handZ.classList.add("paper-hand");
                handZ.innerHTML = '<img src="./images/icon-paper.svg" alt="">'
            break;
            case 2:
                handZ.classList.add("scissors-hand");
                handZ.innerHTML = '<img src="./images/icon-scissors.svg" alt="">'
            break;
            case 3:
                handZ.classList.add("rock-hand");
                handZ.innerHTML = '<img src="./images/icon-rock.svg" alt="">'
            break;
            case 4:
                handZ.classList.add("lizard-hand");
                handZ.innerHTML = '<img src="./images/icon-lizard.svg" alt="">'
            break;
            case 5:
                handZ.classList.add("spock-hand");
                handZ.innerHTML = '<img src="./images/icon-spock.svg" alt="">'
            break;
        }
        return handZ;
}






