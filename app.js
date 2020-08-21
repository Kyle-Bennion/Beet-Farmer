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
  },
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
}

let autoUpgrade = {
  upGrade4: {
    price: 1000,
    quantity: 0,
    multiplier: 10
  }
}


// purchase upGrades
function buyupGrade1() {
  if (mainResource >= clickUpgrade.upGrade1.price) {
    mainResource -= clickUpgrade.upGrade1.price
    clickMod++
    clickUpgrade.upGrade1.quantity++
    clickUpgrade.upGrade1.price *= 2
  }
  drawupGrade1()
  updateScreen()
}

function buyupGrade2() {
  if (mainResource > clickUpgrade.upGrade2.price) {
    mainResource -= clickUpgrade.upGrade2.price
    clickMod += 3
  }
  drawResources()
}

function buyupGrade3() {
  if (mainResource > clickUpgrade.upGrade3.price) {
    mainResource -= clickUpgrade.upGrade3.price
    clickMod += 6
  }
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
  document.getElementById("upGrade1-q").innerHTML = clickUpgrade.upGrade1.quantity.toString()
  document.getElementById("upGrade1-p").innerHTML = clickUpgrade.upGrade1.quantity.toString()

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