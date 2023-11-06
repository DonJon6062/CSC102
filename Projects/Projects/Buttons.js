function AddButtons() {
console.log("I love you, you're doing great!");

    let inputElementStart = document.createElement("input"); 
    inputElementStart.setAttribute("type", "button");

    let inputElementStop = document.createElement("input");
    inputElementStop.setAttribute("type", "button");

    let parent = document.getElementById("Silliest Man Alive");
    parent.appendChild(inputElementStart);
    parent.appendChild(inputElementStop);
}