const btn = document.querySelector(".butt");

const result = document.querySelector(".result");

const checkPalindrome = () => {
    // We will take the value inside the input box by using .value.
    const word = document.querySelector(".input").value;
    let len = word.length;
    // memo // madam -> length = 5
    let start = word.substring(0, Math.floor(len / 2)).toLowerCase(); // this will give us the ma( first part of madam )
    //console.log(start);
    let end = word.substring(len - Math.floor(len / 2)).toLowerCase();
    const flip = [...end].reverse().join("");

    if (start == flip) {
        result.innerHTML = `${word.toUpperCase()} is a palindrome`;
    }
    else {
        result.innerHTML = `${word.toUpperCase()} is NOT a palindrome`;
    }
}
btn.addEventListener("click", checkPalindrome);