

function continueGame() {
    const alphabet = getARandomAlphabet();
    console.log('Your Rendom Alphabet', alphabet);
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;
    // set background color
    setBackgroundColorById(alphabet);
}



function play() {
    // const homeScreen= document.getElementById('home-screen');
    // homeScreen.classList.add('hidden');

    // const playGround = document.getElementById('play-ground');
    // playGround.classList.remove('hidden');
    hideElementById('home-screen');
    showElementById('play-ground');

    continueGame();
}



