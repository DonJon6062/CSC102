//How to start game
function startGame(){
    console.log("startGame function called");

    //first dice roll
    var dice1 = rollDice();
    console.log("The first dice landed on:" + dice1);
    //second dice roll 
    var dice2 = rollDice();
    console.log("The second dice landed on:" + dice2);
    //die total
    var sum = dice1 + dice2; 
    console.log("The sum of the die is:" + sum);

    //shows first dice total to player
    outputRes("Dice1Res", "Dice 1 is:" + dice1);

    //shows second dice total to player
    outputRes("Dice2Res", "Dice 2 is:" + dice2);

    //show overall total
    outputRes("sumRes", "The total is:" + sum);

    //win/lose/tie var
    if (sum == 7 || sum == 11) {
        outputRes("sumRes", "Loser!!!");
    }
    //if dice are the same and even
    else if (dice1 == dice2 && dice2 % 2 == 0){ 
        outputRes("sumRes", "How lucky! You win!");
    }
    //if neither occurs
    else {
        outputRes("sumRes", "You Pushed!");
    }
}

//Craps results
function outputRes(htmlElement, theText){
    //using html element shows results
    document.getElementById(htmlElement).innerHTML = theText;
}
//1-6 rng
function rollDice(){
    //get a number between 0 & 1, multiply it by 6
    var dice = 6 * Math.random();
    //return whole number value
    return Math.ceil(dice);
}