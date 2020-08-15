var myBody = document.getElementById("main")

//for loop to add 10 H1's to DOM
for(var i=0; i < 10;i++){
var newH1 = document.createElement("H1")
newH1.textContent = "Hello World"
//appends to DOM
myBody.append(newH1);
//changes font color to red
newH1.style.color = "red";
newH1.style.textAlign = "center"
}
//loop through array and adds a list to the DOM
var names = ["Steve", "Larry", "Joe", "Shirley", "Steph", "Nate", "Rick", "Emily"];   

var namesList = document.getElementById("list")
for (var i = 0; i < names.length; i++) {
    var newName = document.createElement("li")
    newName.textContent = names[i]
    namesList.append(newName)
}
  