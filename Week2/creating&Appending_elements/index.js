var newH1 = document.createElement("H1")
newH1.textContent = "Welcome to my JS Site"
var myBody = document.getElementById("main")
myBody.append(newH1)
var newP = document.createElement("p")
newP.textContent = "All this was created with Javascript."
myBody.append(newP)
var newOl = document.createElement("ol")
var newLi1 = document.createElement("li")
newLi1.textContent = "List Item 1"
var newLi2 = document.createElement("li")
newLi2.textContent = "List Item 2"
var newLi3 = document.createElement("li")
newLi3.textContent = "List Item 3"
newOl.append(newLi1)
newOl.append(newLi2)
newOl.append(newLi3)
myBody.append(newOl)