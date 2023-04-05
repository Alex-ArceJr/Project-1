  /*----- constants -----*/
const words = [
  ['TACOS GOBERNADOR', 'img/tacos-gobernador.png'],
  ['SOPE', 'img/SOPE.png'],
  ['AGUACHILE', 'img/aguachile.png'],
  ['CHILORIO', 'img/CHILORIO.png'],
  ['TOSTADAS', 'img/TOSTADA.png'],
  ['TAMALE DE ELOTE', 'img/TAMALE.png'],
  ['FLAUTAS', 'img/FLAUTAS.png'],
  ['CHILE RELLENO', 'img/chile-rellenos.png'],
  ['MENUDO', 'img/MENUDO.png'],
  ['BIRRIA', 'img/birria.png']
]
// const images = [
//   'url(img/tacos-gobernador.png)',
//   'url(img/SOPE.png)',
//   'url(img/aguachile.png)',
//   'url(img/CHILORIO.png)',
//   'url(img/TOSTADA.png)',
//   'url(img/TAMALE.png)',
//   'url(img/FLAUTAS.png)',
//   'url(img/chile-rellenos.png)',
//   'url(img/MENUDO.png)',
//   'url(img/birria.png)'
// ]

  /*----- state variables -----*/

  let secretWord;
  let correctLetters;
  let incorrectLetters;
  let secretImg;
  let guessRemaining;


  /*----- cached elements  -----*/

  const playAgainBtn = document.querySelector('footer'); // targets play again button to restart
  const keyBtn = document.querySelector('.key-btn'); // targets the button to chose from
  const placeImg = document.getElementById('food-pic'); // will put pictures from array here
  const underScoreText = document.querySelector('.underscore'); //will put _ of each secret word
  const guessLeft = document.querySelector('.guesses') // to change my guesses

  /*----- event listeners -----*/

  playAgainBtn.addEventListener('click', initalize);
  keyBtn.addEventListener('click', mainLogic);


  /*----- functions -----*/

  initalize();

  function initalize() {
    grabSecretWord();
    displayImage();
    guessRemaining = 5;
  }
  // displayUnderScore()

  function grabSecretWord() {
    let currentWord = words[Math.floor(Math.random() * words.length)];

    secretWord = currentWord[0]; //selects words
    console.log(secretWord)

    secretImg = currentWord[1]; // selects image

    let wordLength = secretWord.length;

    console.log(wordLength)

    displayBoxes(secretWord); // getting the # of underscores

  }

  function displayImage() {
    placeImg.src = secretImg;
  }

  function displayBoxes(word) {
    // console.log(word)
    for(let i = 0; i < word.length; i++){
      if(word[i] === ' ') {
        // console.log(i)
        // console.log('----')
      let space = document.createElement('h3');
      space.classList.add('remove');
      underScoreText.appendChild(space);
      } else {
        // console.log(i)
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
    }
  }
  if (!isCorrect){
    decreaseGuess()
  }
}

function decreaseGuess() {
  guessRemaining--;
  guessLeft.innerText = `Intendos ${guessRemaining}/5 `


}
