  /*----- constants -----*/
const words = [
  ['TACOS GOBERNADOR', 'IMG/tacos-gobernador.png'],
  ['SOPE', 'IMG/SOPE.png'],
  ['AGUACHILE', 'IMG/aguachile.png'],
  ['CHILORIO', 'IMG/CHILORIO.png'],
  ['TOSTADAS', 'IMG/TOSTADA.png'],
  ['TAMALE DE ELOTE', 'IMG/TAMALE.png'],
  ['FLAUTAS', 'IMG/FLAUTAS.png'],
  ['CHILE RELLENO', 'IMG/chile-rellenos.png'],
  ['MENUDO', 'IMG/MENUDO.png'],
  ['BIRRIA', 'IMG/birria.png']
]

  /*----- state variables -----*/

  let secretWord;
  let correctLetters;
  let incorrectLetters;
  let secretImg;
  let guessRemaining;



  /*----- cached elements  -----*/

  const playAgainBtn = document.querySelector('.play-again'); // targets play again button to restart
  const keyBtn = document.querySelector('.key-btn'); // targets the button to chose from
  const placeImg = document.getElementById('food-pic'); // will put pictures from array here
  const underScoreText = document.querySelector('.underscore'); //will put _ of each secret word
  const guessLeft = document.querySelector('.guesses') // to change my guesses
  const displayMessage = document.getElementById('display-result') // message to display winner/loser

  /*----- event listeners -----*/

  playAgainBtn.addEventListener('click', initalize);
  keyBtn.addEventListener('click', mainLogic);


  /*----- functions -----*/

  initalize();

  function initalize() {
    grabSecretWord();
    displayImage();
    guessRemaining = 5;
    correctLetters = 0;
    displayMessage.innerHTML = ''
    guessLeft.innerText = `Intendos ${guessRemaining}/5 `
  }
  // displayUnderScore()

  function grabSecretWord() {
    let currentWord = words[Math.floor(Math.random() * words.length)];

    secretWord = currentWord[0].split(''); //selects words
    console.log(secretWord)

    secretImg = currentWord[1]; // selects image

    let wordLength = secretWord.length;

    console.log(wordLength)
    underScoreText.innerHTML = ''
    displayBoxes(secretWord); // getting the # of boxes

  }

  function displayImage() {
    placeImg.src = secretImg;
  }

  function displayBoxes(word) {
    for(let i = 0; i < word.length; i++){
      if(word[i] === ' ') {
      let space = document.createElement('h3');
      space.classList.add('remove');
      underScoreText.appendChild(space);
      } else {
        let letter = document.createElement('h3');
        underScoreText.appendChild(letter);
      }
    }
  }

function mainLogic(evt) {

  let box = document.querySelectorAll('h3');
  let targetLetter = evt.target.textContent;
  let isCorrect = false;
  for(let i = 0; i < secretWord.length; i++) {
    if(secretWord[i] === targetLetter) {
      box[i].innerText = targetLetter;
      isCorrect = true;
      correctLetters++;
      secretWord.splice(i, 1, '')
      console.log(secretWord)
     }
  }
    if(!isCorrect && guessRemaining !== 0 && displayMessage.innerText === '') {
    decreaseGuess()
    console.log(displayMessage)
  }
  // displayMessage.innerHTML = '';
  checkWinner()
}

function decreaseGuess() {
  guessRemaining--;
  guessLeft.innerText = `Intendos ${guessRemaining}/5 `
}

function checkWinner() {
  if(displayMessage.innerText !== ''){
    return
  }
  if(correctLetters === secretWord.length ) {
    displayMessage.innerText = 'Ganaste!'
  } else if (guessRemaining ===  0) {
   displayMessage.innerText = 'Intenta Otra Vez!'
  }
}
