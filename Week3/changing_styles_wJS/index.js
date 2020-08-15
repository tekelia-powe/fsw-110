//for loop to add 5 H2's to DOM
for(var i=0; i < 5;i++){
    var newH2 = document.createElement("H2")
    newH2.textContent = "Welcome"
    //appends to DOM
    document.body.append(newH2);
    newH2.style.fontSize = 20;
    newH2.style.fontWeight = "lighter";
    newH2.style.fontFamily = "san-serif";
    newH2.style.color = "cornflowerblue";

    document.getElementsByTagName("H2")[i].setAttribute("class", "border");

}

