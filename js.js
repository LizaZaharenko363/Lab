var playerScore=0;
var compScore = 0;
function startpage(){
    var player =prompt("What's your name?");
    document.getElementById('player').textContent = player;
}
function play(){
    if(playerScore==3||compScore==3){
        alert("Restart the game");
        return;
    }
    var num1 = Math.floor(10*Math.random())+1;
    var num2 = Math.floor(10*Math.random())+1;
    if(num1 > num2){
        playerScore++;
    } else if(num1<num2){
        compScore++;
    } else{
        alert("Try once more");
    }
    document.getElementById('playRand').textContent = num1;
    document.getElementById('compRand').textContent = num2;
    document.getElementById('playScore').textContent = ("You have "+playerScore);
    document.getElementById('compScore').textContent = ("Computer has "+compScore);
    if(playerScore==3){
        alert("You won:)");
    } 
    if(compScore==3){
        alert("You lost:(");
    }
}