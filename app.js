// Global Variables
let mainResource = 0
let upGrade1 = 0;
let upGrade2 = 0;
let upGrade3 = 0;
let upGrade4 = 0;


// Upgrades
let clickUpgrade = {
  upGrade1: {
    price: 100,
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

// Farming Functions

function farm() {
  mainResource++
  updateScreen()
}





function drawResources() {
  document.getElementById("mainResource").innerHTML = mainResource.toString()
}




function updateScreen() {
  drawResources()
}

updateScreen()