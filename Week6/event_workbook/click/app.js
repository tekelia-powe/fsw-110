// make the box disapear when the user clicks it
var box = document.getElementsByClassName("red-box")[0];

function disappear() {
    box.style.display = "none"  ;
  }

  box.addEventListener("click", disappear);