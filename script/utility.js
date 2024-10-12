function hideElementById(elemintId){
    const element =document.getElementById(elemintId);
    element.classList.add('hidden');
}
function showElementById(elemintId){
    const element =document.getElementById(elemintId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}





function getARandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);

    const rendomeNumber = Math.random() * 25;
    const index = Math.round(rendomeNumber);

    const alphabet = alphabets[index];
    // console.log(index, alphabet);
    return alphabet;
}


