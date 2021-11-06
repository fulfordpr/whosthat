const character = document.querySelector('.character');
const button = document.querySelector('.btn');
const img = document.querySelector('#char-img');
const charName = document.querySelector('.charName');
const container = document.querySelector('.container');
const playAgain = document.querySelector('.playAgain');
const easyMode = document.querySelector('.easyMode');
const hardMode = document.querySelector('.hardMode');
let isHard;
let currentCharacter;
const characterList = [
    {
        name: 'Bluey',
        img: './img/bluey.png',
        hideImg:'./img/bluey-hide.png',
        hardImg:'./img/bluey-hard.png',
        color:'blue'
    },
    {
        name: 'Bingo',
        img: './img/bingo.png',
        hideImg:'./img/bingo-hide.png',
        hardImg:'./img/bingo-hard.png',
        color:'orange'
    },
    {
        name: 'Lightning Mcqueen',
        img: './img/mcqueen.png',
        hideImg:'./img/mcqueen-hide.png',
        hardImg:'./img/mcqueen-hard.png',
        color:'red'
    },
    {
        name: 'Mater',
        img: './img/mater.png',
        hideImg:'./img/mater-hide.png',
        hardImg:'./img/mater-hard.png',
        color:'brown'
    },
    {
        name: 'Hulk',
        img: './img/hulk.png',
        hideImg:'./img/hulk-hide.png',
        hardImg:'./img/hulk-hard.png',
        color:'green'
    },
    {
        name: 'Iron Man',
        img: './img/ironman.png',
        hideImg:'./img/ironman-hide.png',
        hardImg:'./img/ironman-hard.png',
        color:'red'
    },
    {
        name: 'Blippi',
        img: './img/blippi.png',
        hideImg:'./img/blippi-hide.png',
        hardImg:'./img/blippi-hard.png',
        color:'blue'
    },
    {
        name: 'Spider-Man',
        img: './img/spidey.png',
        hideImg:'./img/spidey-hide.png',
        hardImg:'./img/spidey-hard.png',
        color:'red'
    },
    {
        name: 'Buzz Lightyear',
        img: './img/buzz.png',
        hideImg:'./img/buzz-hide.png',
        hardImg:'./img/buzz-hard.png',
        color:'green'
    },
    {
        name: 'Woody',
        img: './img/woody.png',
        hideImg:'./img/woody-hide.png',
        hardImg:'./img/woody-hard.png',
        color:'yellow'
    },
]

const newCharacter = () => {
    character.style.display = 'none';
    let charNum = Math.floor(Math.random() * characterList.length);
    currentCharacter = characterList[charNum];
    if (isHard == false){
        img.src=currentCharacter.hideImg;
        easyMode.style.backgroundColor = 'rgb(71, 146, 117)'
        hardMode.style.backgroundColor = 'rgb(99, 201, 162)'
    } else if (isHard == true){
        img.src=currentCharacter.hardImg;
        hardMode.style.backgroundColor = 'rgb(71, 146, 117)'
        easyMode.style.backgroundColor = 'rgb(99, 201, 162)'
    }
    character.style.display = 'block';
    console.log(img.src);
}


window.onload = () => {
    isHard = false;
    newCharacter();

}


button.addEventListener('click', () => {
    img.src=currentCharacter.img;
    charName.textContent = `It's ${currentCharacter.name}!`;
    playAgain.style.display = 'block';
})

playAgain.addEventListener('click', () => {
    newCharacter();
    charName.textContent = '';
})

easyMode.addEventListener('click', () =>{
    isHard = false;
    newCharacter();
})

hardMode.addEventListener('click', () => {
    isHard = true;
    newCharacter();
})