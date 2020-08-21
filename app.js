let mainResource = 0
let resource1 = 0;
let resource2 = 0;
let resource3 = 0;
let resource4 = 0;

let clickUpgrade = {

}

let autoUpgrade = {

}


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