let randomnum = parseInt(((Math.random() * 100)+1).toFixed(0));

const userinput = document.querySelector('.guessfield')
const submitButton = document.querySelector('.subClass')
const guessA = document.querySelector('.guesses')
const remainingG = document.querySelector('.remain')
const output = document.querySelector('.loworhigh')
const startover = document.querySelector('.second')

const p = document.createElement('p')

let userguess = [];
let numguess = 1;

let playgame = true;
let guess
if(playgame) {
    submitButton.addEventListener('click', function(ele) {
        ele.preventDefault();
        guess = parseInt(userinput.value);
        
        validateguess(guess);
    })
}

function validateguess(guess) {
    if(isNaN(guess)) {
        displaymessage("Enter a valid num");
    }
    else if(guess < 0 && guess > 100){
        displaymessage("Please give a num which lay between 1 to 100 only");
    }
    else {
        userguess.push(guess)
        if(numguess === 11) {
            displayguess(guess);
            displaymessage(`Game over. Random number was ${randomnum}`);
            endgame();
        }
        else {
            displayguess(guess);
            checkguess(guess);
        }
    }
}

function checkguess() {
    if(guess === randomnum) {
        displaymessage(`You guessed it Right`);
        endgame();
    }
    else if(guess < randomnum) {
        displaymessage(`Number is low try again`)
    }
    else if (guess > randomnum){
        displaymessage(`Number is greater try again`)
    }
}   

function displayguess() {
    userinput.value = '';
    guessA.innerHTML += `${guess} ,`
    
    remainingG.innerHTML = `Your remaining guesses are ${10 - numguess}`
    numguess++;
}

function displaymessage(message) {
    output.innerHTML = `<h2>${message}</h2>`;
}

function endgame() {
    userinput.value = '';
    userinput.setAttribute('disabled', '');
    p.classList.add('botton');
    p.innerhtml = `<h2 id="newgame">Start new game </h2>`;
    startover.appendChild(p);
    playgame = false;
    newgame();
}

function newgame() {
    const newgamebutton = document.querySelector('#newgame');
    newgamebutton.addEventListener('click', function() {
        randomnu = parseInt(((Math.random() * 100)+1).toFixed(0));
        userguess = []
        numguess = 1;
        guessA = [];
        remainingG.innerHTML = `${10 - numguess}`;
        userinput.removeAttribute('disabled');
        startover.removeChild(p);


        playxgame = true;

    })

}


