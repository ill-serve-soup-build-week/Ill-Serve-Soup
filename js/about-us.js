// Location of necessary changes for night mode

//Body of document
const container1 = document.querySelector('body')


//This is the employee Fonts
const employeeFont = document.querySelector('body')

//This is the night mode button

const nightModeBtn = document.querySelector('.night-mode')


// This is the link to the button 

const nightButton = document.querySelector('.night-mode-container')


//This is the event listener
// We are using the button to add the listner too and chainging the background
// of the body

//This function changes the background color

function backgroundChange() {
    container1.style.background = 'black';
}

//This changes the font colors for all staff members

function textChange() {
    employeeFont.style.color = 'white';
}

//This changes the night mode button

function changeBtn() {
    nightModeBtn.innerHTML = 'Light Mode';

}



function allFunctions() {
    backgroundChange();
    textChange();
    changeBtn();
}

// nightButton.addEventListener('click', function() {
//     container1.style.background = 'black';
// });

nightButton.addEventListener('click', allFunctions);