/*Submit Entry*/
function validateInput(event){
    event.preventDefault();
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let zip = document.getElementById("zip").value;


    let firstLast = firstName + " " + lastName;
    console.log(firstLast);

    console.log(firstLast.length);
    console.log("Printed length");
    if (firstLast.length < 5) {
        alert("Not enough characters! The minimum character requirement is 5!")
        return false;
    } 
    //states the name given, with a hello if valid
    else {
       alert("Hello" + " " + firstLast)
   }

    const zipReg = /\b\d{5}\b/

    if(!zipReg.test(zip)) {
        alert("Invalid zip! Must be 5 numbers.")
        return false;
    }

    let num = parseInt(zip)
    console.log("Vaild Zip!");
}

window.addEventListener("DOMContentLoaded" , (event) => {
    const form = document.getElementById("Test Form"); 
    if(form) {
        form.addEventListener("submit", validateInput);
    }
});