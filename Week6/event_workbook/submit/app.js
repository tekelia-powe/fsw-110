// The "submit" event refreshes your browser by default
// use "e.preventDefault()" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function

const form = document.getElementbyId("submit-me");

document.forms.button.addEventListener("submit", function (e){
    e.preventDefault(e)



var name = form.getElementbyId("name").value;
var age = form.getElementbyId("age").value;


alert("Name: "+name+"\nAge: "+age)
document.information.reset();
console.log(name)
})

