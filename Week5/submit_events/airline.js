document.information.addEventListener("submit", function (e){
    e.preventDefault()
const form = document.information;

var fname = form.fname.value;
var lname = form.lname.value;
var age = form.age.value;
var gender = form.gender.value;
var destinations = form.destinations.value;

const checkedInputs = [];

for (let i=0; i < form.diet.length; i++){

    if(form.diet[i].checked){
        checkedInputs.push(form.diet[i].value)
    }
}

//var diet = document.information.diet.value;

alert("First Name: "+fname+"\nLast Name: "+lname+"\nAge: "+age+"\nGender: "+gender+"\nLocation: "+destinations+"\nDietary Restrictions: "+checkedInputs)
document.information.reset();
})

