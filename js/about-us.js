// Location of necessary changes for night mode

//Body of document
const bodyColor = document.querySelector('body')


//This is the employee Fonts
const textColor = document.querySelector('body')

//This is the night mode button

const nightModeBtn = document.querySelector('.night-tab')
const dayModeBtn = document.querySelector('.day-tab')






// Night Mode Function

function nightBackground() {
    bodyColor.style.background = 'black';
}

//This changes the font colors for all staff members

function nightText() {
    textColor.style.color = 'white';
}

//This changes the night mode button

function allNightFunctions() {
    nightBackground();
    nightText();
}







// Day Mode Functions

function dayBackground() {
    bodyColor.style.background = 'white';
}

//This changes the font colors for all staff members

function dayText() {
    textColor.style.color = 'black';
}

//This changes the night mode button

function allDayFunctions() {
    dayBackground();
    dayText();
}









nightModeBtn.addEventListener('click', allNightFunctions);
dayModeBtn.addEventListener('click', allDayFunctions);