// Global Variables
let mainResource = 0
let clickMod = 1;
let autoMod = 0;


// Upgrades
let clickUpgrade = {
  upGrade1: {
    price: 10,
    quantity: 0,
    multiplier: 1
  }
}

let autoUpgrade = {
  upGrade2: {
    price: 300,
    quantity: 0,
    multiplier: 3
  },
  upGrade3: {
    price: 600,
    quantity: 0,
    multiplier: 6
  },
  upGrade4: {
    price: 1000,
    quantity: 0,
    multiplier: 10
  }
}


// purchase upGrades
function buyupGrade1() {
  if (mainResource > clickUpgrade.upGrade1.price) {
    mainResource -= clickUpgrade.upGrade1.price
    clickMod++
  }
  drawResources()
}
function buyupGrade2() {
  if (mainResource > clickUpgrade.upGrade1.price) {
    mainResource -= clickUpgrade.upGrade1.price
    clickMod += 3
  }
  drawResources()
}




// Get Resources Functions

function farm() {
  mainResource += clickMod
  updateScreen()
}


// Draw Functions

function drawResources() {
  document.getElementById("mainResource").innerHTML = mainResource.toString()
}

function drawupGrade1() {

}
function drawupGrade2() {

}
function drawupGrade3() {

}
function drawupGrade4() {

}

function updateScreen() {
  drawResources()
}

updateScreen()