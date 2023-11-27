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

//play a little jingle
function smile() {
    //Thx NCS for the royalty free songs; list of their info
    let songInfo = ["Song: Tokyo Machine - SLASH [NCS10 Release] Music provided by NoCopyrightSounds Free Download/Stream: http://NCS.io/SLASH Watch: http://youtu.be/cGkv5RcPRuo", "Song: Jim Yosef - Samurai [NCS Release] Music provided by NoCopyrightSounds Free Download/Stream:  Watch: http://youtu.be/", "Song: Wiguez & EH!DE - The Path (Ft. Agassi) [NCS Release] Music provided by NoCopyrightSounds Free Download/Stream: http://NCS.io/ThePath Watch: http://youtu.be/"];
    //Songs and artists used
    let gameSongs = ["Tokyo Machine - SLASH [NCS Release].mp3", "Jim Yosef - Samurai [NCS Release].mp3", "Wiguez & EH!DE - The Path (Ft. Agassi) [NCS Release].mp3"];
    //accesses the html
    let songElement = document.getElementById("VGM");
    //loops song when the button is clicked; plays one at randon
    songElement.loop = true
    songElement.src = gameSongs[Math.floor(Math.random() * gameSongs.length)];
    songElement.play();
    //prints the artist and info for the first song in the array
    console.log (songInfo[0]);
    console.log (gameSongs[0]);
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
