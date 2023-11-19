/*Submit Entry*/
function validateInput(event){
    event.preventDefault();
    let firstName = document.getElementById("fname").value;
    //console.log(firstName);
    let lastName = document.getElementById("lname").value;
    //console.log(lastName);
    let zip = document.getElementById("zip").value;
    //console.log(zip);

    let firstLast = firstName + " " + lastName;
    console.log(firstLast);

    console.log(firstLast.length);
    console.log("Printed length");
    if (firstLast.length < 20) {
        alert("Not enough characters! The minimum character requirement is 20!")
        return false;
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