
const totalscore = {computerscore :0,playerscore :0}

function getComputerChoice(){
    let rpsChoice = ["Rock",'Paper','Scissors']
    let randomChoice = Math.floor(Math.random()*3)
    return rpsChoice[randomChoice]

}


function getResult(playerChoice,computerChoice){
    let score
    if(playerChoice==computerChoice){
        score = 0
    }
    else if(playerChoice=='Rock' && computerChoice=='Scissors'){
        score = 1
    }
    else if(playerChoice=='Paper' && computerChoice=='Rock'){
        score = 1
    }
    else if(playerChoice=='Scissors' && computerChoice=='Paper'){
        score = 1
    }
    else{
        score = -1
    }
return score
}

function showResult(score,playerChoice,computerChoice){
    const handsdiv = document.getElementById('hands')
    const resultdiv = document.getElementById('result')
    const  playerscorediv = document.getElementById('player-score')
    if(score == -1){
        resultdiv.innerText = 'you lose'
    }
    else if(score == 0){
        resultdiv.innerText = 'its a tie'}
    else{
        resultdiv.innerText = 'you win'
    }
    handsdiv.innerText = `${playerChoice} vs ${computerChoice}`
    playerscorediv.innerText = `your score :${totalscore['playerscore']} ,computer score :${totalscore['computerscore']}`
}
function onClickRPS(playerChoice){
    console.log({playerChoice})
    const computerChoice = getComputerChoice()
    console.log({computerChoice})
    let score = getResult(playerChoice,computerChoice)
    totalscore['playerscore'] += score
    if(score==1){
        totalscore['computerscore']-=1
    } else if(score== -1){
        totalscore['computerscore'] +=1
    }else{
        totalscore['computerscore'] +=0
    }
    console.log({score})
    console.log(totalscore)
    showResult(score,playerChoice,computerChoice)
}
function playGame(){
    const rpsButtons = document.querySelectorAll('.rpsButton')
    // rpsButtons[0].onclick = () => console.log(rpsButtons[0].value)
    // rpsButtons[1].onclick = () => console.log(rpsButtons[1].value)
    // rpsButtons[2].onclick = () => console.log(rpsButtons[2].value)

    rpsButtons.forEach(rpsButton => {
        rpsButton.onclick = () => onClickRPS(rpsButton.value)
    })
    const endgamebutton = document.getElementById('endGameButton')
    endgamebutton.onclick = () =>endGame(totalscore)
}

function endGame(totalscore){
    totalscore['playerscore'] = 0;
    totalscore['playerscore'] = 0;
    const handsdiv = document.getElementById('hands')
    const resultdiv = document.getElementById('result')
    const  playerscorediv = document.getElementById('player-score')
    resultdiv.innerText = ''
    handsdiv.innerText = ''
    playerscorediv.innerText=''
}
playGame()