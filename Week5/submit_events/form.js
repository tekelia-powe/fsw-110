document.information.addEventListener("submit", function (e){
    e.preventDefault()

var fname = document.information.fname.value;
var lname = document.information.lname.value;
var phone = document.information.phone.value;

alert("Hi "+fname+" "+lname+". Your phone number is "+phone+".")
document.information.reset();
})

