//amira salah

const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
input = document.querySelector(".input"),
refreshButton = document.querySelector(".refreshButton"),
checkButton = document.querySelector(".checkButton");

let correctWord, timer;

const initialTimer = (maxTime) => {
    clearInterval(timer);//when initial time reach to max value clear the interval to avoid repeating count
    timer = setInterval(() => {
        if(maxTime > 0) {
            maxTime--;
            return timeText.innerText = maxTime;
        }
        alert(` your time is over ,the correct answer is: ${correctWord.toUpperCase()} `);
        initOfPage();
    }, 1000 );
}

const initOfPage = () => {
    initialTimer(100);
    let randomObjectsOfWords = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObjectsOfWords.word.split("");// split word to char
    for (let i = wordArray.length - 1; i > 0; i--) {    //take the chars after split and switch every two chars (switch)
    let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join(""); //chars to string after switch it
    hintText.innerText = randomObjectsOfWords.hint;
    correctWord = randomObjectsOfWords.word.toLowerCase();
   
   
}
initOfPage();
//to check if entered word is equal to the original word
const checkedWord = () => {
    let enteredWord = input.value.toLowerCase();
    if(enteredWord=="") 
    return alert("Enter A Word To Check!"); //if you clicked checkword btn without enter avalue
    if(enteredWord == correctWord) 
     //check if your answer is not correct?
   return alert(`Bravo Amira ${correctWord.toUpperCase() }is the correct answer`);
alert(`Sorry Amira ${enteredWord.toUpperCase()} is not the correct answer try again`);
initOfPage();
}
refreshButton.addEventListener("click", initOfPage);
checkButton.addEventListener("click", checkedWord);
