//define elements
var myBody = document.getElementById("main")

var newH1 = document.createElement("H1")
newH1.textContent = "Creating a basic Website Using JS"

var newP = document.createElement("p")
newP.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

var newOl = document.createElement("ol")
var newLi1 = document.createElement("li")
newLi1.textContent = "List Item 1"
var newLi2 = document.createElement("li")
newLi2.textContent = "List Item 2"
var newLi3 = document.createElement("li")
newLi3.textContent = "List Item 3"

var navBar = document.createElement("nav")
var navUl = document.createElement("ul")
var nav1 = document.createElement("li")
var nav2 = document.createElement("li")
var nav3 = document.createElement("li")
var navLink1 = document.createElement("a")
navLink1.textContent = " Home "
navLink1.href = ""
var navLink2 = document.createElement("a")
navLink2.textContent = " About Us "
navLink2.href = ""
var navLink3 = document.createElement("a")
navLink3.textContent = " Contact Us "
navLink3.href = ""
var footer = document.createElement("footer")
footer.textContent = "This is a footer"

//append items to body
nav1.append(navLink1)
nav2.append(navLink2)
nav3.append(navLink3)
navUl.append(nav1)
navUl.append(nav2)
navUl.append(nav3)
navBar.append(navUl)
myBody.append(navBar)
myBody.append(newH1)
myBody.append(newP)
newOl.append(newLi1)
newOl.append(newLi2)
newOl.append(newLi3)
myBody.append(newOl)
myBody.append(footer)


