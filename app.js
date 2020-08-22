// Global Variables
let mainResource = 0
let clickMod = 1;
let autoMod = 1;


// Upgrades
let clickUpgrade = {
  upGrade1: {
    price: 10,
    quantity: 0,
    multiplier: 1
  },
  upGrade2: {
    price: 30,
    quantity: 0,
    multiplier: 3
  },
  upGrade3: {
    price: 60,
    quantity: 0,
    multiplier: 6
  },
}

let autoUpgrade = {
  upGrade4: {
    price: 100,
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
  if (mainResource >= clickUpgrade.upGrade2.price) {
    mainResource -= clickUpgrade.upGrade2.price
    clickMod += 3
    clickUpgrade.upGrade2.quantity++
    clickUpgrade.upGrade2.price *= 2
  }
  drawupGrade2()
  updateScreen()
}

function buyupGrade3() {
  if (mainResource >= clickUpgrade.upGrade3.price) {
    mainResource -= clickUpgrade.upGrade3.price
    clickMod += 6
    clickUpgrade.upGrade3.quantity++
    clickUpgrade.upGrade3.price *= 2
  }
  drawupGrade3()
  updateScreen()
}

function buyupGrade4() {
  if (mainResource > autoUpgrade.upGrade4.price) {
    mainResource -= autoUpgrade.upGrade4.price
    autoMod +=10
    autoUpgrade.upGrade4.quantity++
    autoUpgrade.upGrade4.price *= 3

    setInterval(() => {
      mainResource += autoMod
      drawResources()
    }, 3000);
  }
  drawupGrade4()
  updateScreen()
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
  document.getElementById("upGrade1-p").innerHTML = clickUpgrade.upGrade1.price.toString()

}
function drawupGrade2() {
  document.getElementById("upGrade2-q").innerHTML = clickUpgrade.upGrade2.quantity.toString()
  document.getElementById("upGrade2-p").innerHTML = clickUpgrade.upGrade2.price.toString()
}
function drawupGrade3() {
  document.getElementById("upGrade3-q").innerHTML = clickUpgrade.upGrade3.quantity.toString()
  document.getElementById("upGrade3-p").innerHTML = clickUpgrade.upGrade3.price.toString()
}
function drawupGrade4() {
  document.getElementById("upGrade4-q").innerHTML = autoUpgrade.upGrade4.quantity.toString()
  document.getElementById("upGrade4-p").innerHTML = autoUpgrade.upGrade4.price.toString()
}

function updateScreen() {
  drawResources()
  drawupGrade1()
  drawupGrade2()
  drawupGrade3()
  drawupGrade4()
}




updateScreen()