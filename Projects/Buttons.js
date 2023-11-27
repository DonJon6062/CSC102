function AddImageButtons() {
    console.log("Buttons GO!");

    let inputElementPlay = document.createElement("input"); 
    inputElementPlay.setAttribute("type", "button");
    inputElementPlay.setAttribute("value", "Play");
    inputElementPlay.setAttribute("onClick"," startButton()");
    inputElementPlay.setAttribute("id", "startButton");

    let inputElementPause = document.createElement("input");
    inputElementPause.setAttribute("type", "button");
    inputElementPause.setAttribute("value", "Pause");
    inputElementPause.setAttribute("onClick"," startButton()");
    inputElementPause.setAttribute("id", "startButton");
    inputElementPause.setAttribute("disabled","true");

    let parent = document.getElementById("Silliest Man Alive"); 
    parent.appendChild(inputElementPlay); 
    parent.appendChild(inputElementPause);
}

function PlayButton() {
    console.log("Time to start the animation!");
    let inputElementPlay = document.getElementById("PlayButton");
    inputElementPlay.setAttribute("disabled", "true"); 

    let inputElementPause = document.getElementById("PauseButton");
    inputElementPause.removeAttribute("disabled");

    let TheStrangestMan = document.getElementById("Silliest man Alive");
    TheStrangestMan.style.animationDuration = "3s";
}

function PauseButton() {
    console.log("No mas"); 
    let inputElementPlay = document.getElementById("PlayButton");
    inputElementPlay.removeAttribute("disabled");

    let inputElementPause = document.getElementById("PauseButton");
    inputElementPause.setAttribute("disabled", "true"); 
    TheStrangestMan.style.animationDuration = "0s";
}
