function revWord() {
    let word = document.getElementById("Enter Word: ");
    console.log(word);
    let reversedWord = "";
  
    for (let i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
  
  console.log("The word in reverse is:", reversedWord);
  
  }

window.addEventListener("DOMContentLoaded" , (event) => {
    const form = document.getElementById("Is It A Palindrome?"); 
    if(form) {
        form.addEventListener("submit", revWord);
    }
});