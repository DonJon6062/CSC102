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
//when the webpage is clicked, the function plays out
var clicked = false; 
//this is what is activated on click and lays dormant until then
window.addEventListener("click", (event) => {
    //on event click
    if(!clicked){
        //three relaxing sounds in an array, with all set to one value (the birds are loud)
        let audioSources = ["BeautifulBirdsong.wav","Waterfall.wav","Crickets.wav"]; 
        //links the HTML element and JS element via accessing the BGM ID
        let audioElement = document.getElementById("BGM");
        //loops the audio on play
        audioElement.loop = true;
        //plays one at random on play/reloading of the page
        audioElement.src = audioSources[Math.floor(Math.random() * audioSources.length)];
        //plays the audio selected
        audioElement.play();
        //on click / makes it so that audios don't stack by clicking the page over and over
        clicked = true;
    }
});
