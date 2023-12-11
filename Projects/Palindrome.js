function reverseTheWord() {
  event.preventDefault();
  //get input and remove spaces
  let word = document.getElementById("theWord").value.toLowerCase().replace(/\s/g, ''); 
  let palindrome = "";

  for (let i = word.length - 1; i >= 0; i--) {
    palindrome += word[i];
  }

  let message = document.getElementById("result");
  if (word === palindrome) {
    alert ("'" + word + "' is a palindrome!")
  } else {
    alert ("'" + word + "' is not a palindrome.")
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("palindromeChecker");
  form.addEventListener("submit", reverseTheWord);
});