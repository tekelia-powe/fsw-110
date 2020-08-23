// const readline = require("readline-sync")
var result = 0;

function mySum(){
    var num1 = document.getElementById("add_num1").value;
    var num2 = document.getElementById("add_num2").value;
    result = parseInt(num1) + parseInt(num2);
    document.getElementById("add_total").innerHTML = result;
}

function myDifference(){
    var num1 = document.getElementById("sub_num1").value;
    var num2 = document.getElementById("sub_num2").value;
    result = parseInt(num1) - parseInt(num2);
    document.getElementById("sub_total").innerHTML = result;
}

function myProduct(){
    var num1 = document.getElementById("mul_num1").value;
    var num2 = document.getElementById("mul_num2").value;
    result = parseInt(num1) * parseInt(num2);
    document.getElementById("mul_total").innerHTML = result;
}
document.getElementById("add_submit").addEventListener("click", mySum);
document.getElementById("sub_submit").addEventListener("click", myDifference);
document.getElementById("mul_submit").addEventListener("click", myProduct);

