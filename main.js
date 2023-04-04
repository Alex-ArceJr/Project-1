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

  const playAgainBtn = document.querySelector('footer');
  const keyBtn = document.querySelectorAll('.key-btn > button');
  const placeImg = document.getElementById('food-pic');
  const underScoreText = document.querySelector('.underscore');

  /*----- event listeners -----*/

  playAgainBtn.addEventListener('click', initalize);
  // keyBtn.addEventListener('click', )


  /*----- functions -----*/

  initalize();

  function initalize() {
    grabSecretWord()
    displayImage()



  }
  displayUnderScore()

  function grabSecretWord() {
    let currentWord = words[Math.floor(Math.random() * words.length)];

    secretWord = currentWord[0]; //selects words
    console.log(secretWord)

    secretImg = currentWord[1]; // selects image

    let wordLength = secretWord.length

    console.log(wordLength)

    displayUnderScore(secretWord); // getting the # of underscores

  }

  function displayImage() {
    placeImg.src = secretImg;
    console.log(placeImg)
  }

  function displayUnderScore(word) {
    console.log(word)
    for(let i = 0; i < word.length; i++){

        let word = document.createElement('h3');
          word.textContent = '_\u00A0';
          underScoreText.appendChild(word);
    }
  }
