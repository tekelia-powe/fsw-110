function hoverOverSquare() {
    document.getElementById("square").style.backgroundColor = "blue";

    
}
function clickOnSquare() {
    document.getElementById("square").style.backgroundColor = "red";
}

function clickOffSquare() {
    document.getElementById("square").style.backgroundColor = "yellow";
}

function doubleClickSquare() {
    document.getElementById("square").style.backgroundColor = "green";
}

function scrollSquare() {
    document.getElementById("square").style.backgroundColor = "orange";
}


document.getElementById("square").addEventListener("mouseover", hoverOverSquare);
document.getElementById("square").addEventListener("mousedown", clickOnSquare);
document.getElementById("square").addEventListener("mouseup", clickOffSquare);
document.getElementById("square").addEventListener("dblclick", doubleClickSquare);
window.onscroll = function() {scrollSquare()};


document.addEventListener("keydown", function(event) {
    if(event.which === 79){
        document.getElementById("square").style.backgroundColor = "orange";
    }
  })

  document.addEventListener("keydown", function(event) {
    if(event.which === 82){
        document.getElementById("square").style.backgroundColor = "red";
    }
  })
  document.addEventListener("keydown", function(event) {
    if(event.which === 71){
        document.getElementById("square").style.backgroundColor = "green";
    }
  })
  document.addEventListener("keydown", function(event) {
    if(event.which === 66){
        document.getElementById("square").style.backgroundColor = "blue";
    }
  })
  document.addEventListener("keydown", function(event) {
    if(event.which === 89){
        document.getElementById("square").style.backgroundColor = "yellow";
    }
  })