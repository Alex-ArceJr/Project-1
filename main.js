  /*----- constants -----*/
const words = [
  'TACOS GOBERNADOR',
  'SOPE',
  'AGUACHILE',
  'CHILORIO',
  'TOSTADAS',
  'TAMALE DE ELOTE',
  'FLAUTAS',
  'CHILE RELLENO',
  'MENUDO',
  'BIRRIA'
]
const images = [
  'url(img/tacos-gobernador.png)',
  'url(img/SOPE.png)',
  'url(img/aguachile.png)',
  'url(img/CHILORIO.png)',
  'url(img/TOSTADA.png)',
  'url(img/TAMALE.png)',
  'url(img/FLAUTAS.png)',
  'url(img/chile-rellenos.png)',
  'url(img/MENUDO.png)',
  'url(img/birria.png)'
]

  /*----- state variables -----*/

  let secretWord;
  let correctLetters;
  let incorrectLetters;
  let secretImg;
  let guessRemaining;


  /*----- cached elements  -----*/

  const playAgainBtn = document.querySelector('footer');
  const keyBtn = document.querySelector('.key-btn');

  /*----- event listeners -----*/



playAgainBtn.addEventListener('click', initalize)
  /*----- functions -----*/
  initalize();

  function initalize() {
    const newImg = new Image(../img)
  }
