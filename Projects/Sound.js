//when the webpage is clicked, the function plays out
var clicked = false; 
//this is what is activated on click and lays dormant until then
window.addEventListener("click", (event) => {
    //on event click
    if(!clicked){
        // A list of things to check 
        console.log ("All the pages now have sound")
        console.log( "The Form Entry page responds to any name above 5 with the full name, as a hello")
        console.log("Say Cheese was given a function in the Game page")
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