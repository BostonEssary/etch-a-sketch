const divContainer = document.getElementById('divContainer');
const buttonHolder = document.getElementById('buttonHolder');
let gridItems = document.getElementsByClassName('grid-item');
let numOfBoxes = 16;
let boxColor = document.getElementById('colorButton').value;


function makeRows(rows, cols) {
    divContainer.style.setProperty('--grid-rows', rows);
    divContainer.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let div = document.createElement('div');
        div.setAttribute('style', 'background-color:white;')
        divContainer.appendChild(div).className = 'grid-item';
    }
}


makeRows(numOfBoxes, numOfBoxes)

for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].addEventListener('mouseover', changeColor)
}

function changeColor() {
    this.style.backgroundColor = boxColor;
}

function deleteDivs() {
    while (gridItems.length > 0) {
        gridItems[0].parentNode.removeChild(gridItems[0]);
    }
}
const boxSlider = document.createElement('input');
boxSlider.setAttribute('id', 'boxSlider')
boxSlider.setAttribute('type', 'range');
boxSlider.setAttribute('min', '16');
boxSlider.setAttribute('max', '100');
boxSlider.setAttribute('value', '16');
buttonHolder.appendChild(boxSlider)
boxSlider.addEventListener('input', sliderTextValues )
boxSlider.addEventListener('change', addBoxes)

function sliderTextValues () {
    numOfBoxes = boxSlider.value;
    sliderText.innerText = `Number of Boxes: ${numOfBoxes}`
  
}

function addBoxes() {
    deleteDivs();
    makeRows(numOfBoxes, numOfBoxes)
    for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].addEventListener('mouseover', changeColor)
    }
}


let sliderText = document.createElement('label');
buttonHolder.prepend(sliderText)
sliderText.setAttribute = ('for', 'boxSlider');
sliderText.innerText = `Number of Boxes: ${numOfBoxes}`





const colorButton = document.getElementById('colorButton');
colorButton.setAttribute('id', 'colorButton');
colorButton.setAttribute('type', 'color')
buttonHolder.appendChild(colorButton);
colorButton.innerText = 'Change Color';
colorButton.addEventListener('change', setColor)
colorButton.addEventListener('click', toggleResetColor)


const rainbowButton = document.createElement('button');
rainbowButton.setAttribute('id', 'rainbowButton');
buttonHolder.appendChild(rainbowButton)
rainbowButton.innerText = 'Rainbow!'
rainbowButton.addEventListener('click', toggleRainbowBoxes)

const resetButton = document.createElement('button');
resetButton.setAttribute('id', 'resetButton');
buttonHolder.appendChild(resetButton);
resetButton.innerText = 'Reset';
resetButton.addEventListener('click', resetCanvas)

function resetCanvas() {
    for (let i = 0; i < gridItems.length; i++) {
        
       gridItems[i].setAttribute('style', 'background-color: white;')
    }
}

function toggleResetColor() {

    for (let i = 0; i < gridItems.length; i++) {
        
        gridItems[i].removeEventListener('mouseover', rainbowColor)
        gridItems[i].addEventListener('mouseover', resetColor)
    }
}

function resetColor() {
    boxColor = document.getElementById('colorButton').value;
}

function toggleRainbowBoxes() {
    
    for (let i = 0; i < gridItems.length; i++) {
        
        gridItems[i].addEventListener('mouseover', rainbowColor)
    }
    
}

function rainbowColor() {
    let a = randomRGBValue();
    let b = randomRGBValue();
    let c = randomRGBValue();
    boxColor = `rgb(${a}, ${b}, ${c})`
    console.log(boxColor)
    
}

 



function randomRGBValue () {
    return Math.floor(Math.random() * 255) + 1;
}


function setColor(e) {
   
    boxColor = e.target.value;
  

}



function setNumOfBoxes() {
    let newNum = prompt();
    if ((newNum > 100) || (newNum < 16)) {
        alert('ERROR: Number given must not exceed 100 or be below 16')
    }
    else {
        numOfBoxes = newNum
        deleteDivs();
        makeRows(numOfBoxes, numOfBoxes)
        for (let i = 0; i < gridItems.length; i++) {
            gridItems[i].addEventListener('mouseover', changeColor)
        }
    }
}