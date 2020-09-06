/* Your task is to display to the user the key and key code they press.

Example of output: You've pressed the "a" key. It's key code is 65.

Wes Bos made this https://keycode.info/ for us to use as an example. */

document.addEventListener("keydown", function(event) {
    if(event.which === 3){
        document.getElementById("output").innerHTML = "You've pressed the break key. It's key code is 3";
    } else if(event.which === 8){
        document.getElementById("output").innerHTML = "You've pressed the backspace key. It's key code is 8";
    } else if(event.which === 9){
        document.getElementById("output").innerHTML = "You've pressed the tab key. It's key code is 9";
    }else if(event.which === 13){
        document.getElementById("output").innerHTML = "You've pressed the enter key. It's key code is 13";
    }else if(event.which === 16){
        document.getElementById("output").innerHTML = "You've pressed the Shift key. It's key code is 16";
    }else if(event.which === 17){
        document.getElementById("output").innerHTML = "You've pressed the Ctrl key. It's key code is 17";
    }else if(event.which === 20){
        document.getElementById("output").innerHTML = "You've pressed the Caps Lock key. It's key code is 20";
    }else if(event.which === 32){
        document.getElementById("output").innerHTML = "You've pressed the Spacebar key. It's key code is 32";
    }else if(event.which === 33){
        document.getElementById("output").innerHTML = "You've pressed the Page Up key. It's key code is 33";
    }else if(event.which === 34){
        document.getElementById("output").innerHTML = "You've pressed the Page Down key. It's key code is 34";
    }else if(event.which === 48){
        document.getElementById("output").innerHTML = "You've pressed the 0 key. It's key code is 48";
    }else if(event.which === 49){
        document.getElementById("output").innerHTML = "You've pressed the 1 key. It's key code is 49";
    }else if(event.which === 50){
        document.getElementById("output").innerHTML = "You've pressed the 2 key. It's key code is 50";
    }else if(event.which === 51){
        document.getElementById("output").innerHTML = "You've pressed the 3 key. It's key code is 51";
    }else if(event.which === 52){
        document.getElementById("output").innerHTML = "You've pressed the 4 key. It's key code is 52";
    }else if(event.which === 53){
        document.getElementById("output").innerHTML = "You've pressed the 5 key. It's key code is 53";
    }else if(event.which === 54){
        document.getElementById("output").innerHTML = "You've pressed the 6 key. It's key code is 54";
    }else if(event.which === 55){
        document.getElementById("output").innerHTML = "You've pressed the 7 key. It's key code is 55";
    }else if(event.which === 56){
        document.getElementById("output").innerHTML = "You've pressed the 8 key. It's key code is 56";
    }else if(event.which === 57){
        document.getElementById("output").innerHTML = "You've pressed the 9 key. It's key code is 57";
    }else if(event.which === 58){
        document.getElementById("output").innerHTML = "You've pressed the : key. It's key code is 58";
    }else if(event.which === 59){
        document.getElementById("output").innerHTML = "You've pressed the = key. It's key code is 59";
    }else if(event.which === 65){
        document.getElementById("output").innerHTML = "You've pressed the a key. It's key code is 65";
    }else if(event.which === 66){
        document.getElementById("output").innerHTML = "You've pressed the b key. It's key code is 66";
    }else if(event.which === 67){
        document.getElementById("output").innerHTML = "You've pressed the c key. It's key code is 67";
    }else if(event.which === 68){
        document.getElementById("output").innerHTML = "You've pressed the d key. It's key code is 68";
    }else if(event.which === 69){
        document.getElementById("output").innerHTML = "You've pressed the e key. It's key code is 69";
    }else if(event.which === 70){
        document.getElementById("output").innerHTML = "You've pressed the f key. It's key code is 70";
    }else if(event.which === 71){
        document.getElementById("output").innerHTML = "You've pressed the g key. It's key code is 71";
    }else if(event.which === 72){
        document.getElementById("output").innerHTML = "You've pressed the h key. It's key code is 72";
    }else if(event.which === 73){
        document.getElementById("output").innerHTML = "You've pressed the i key. It's key code is 73";
    }else if(event.which === 74){
        document.getElementById("output").innerHTML = "You've pressed the j key. It's key code is 74";
    }else if(event.which === 75){
        document.getElementById("output").innerHTML = "You've pressed the k key. It's key code is 75";
    }else if(event.which === 76){
        document.getElementById("output").innerHTML = "You've pressed the l key. It's key code is 76";
    }else if(event.which === 77){
        document.getElementById("output").innerHTML = "You've pressed the m key. It's key code is 77";
    }else if(event.which === 78){
        document.getElementById("output").innerHTML = "You've pressed the n key. It's key code is 78";
    }else if(event.which === 79){
        document.getElementById("output").innerHTML = "You've pressed the o key. It's key code is 79";
    }else if(event.which === 80){
        document.getElementById("output").innerHTML = "You've pressed the p key. It's key code is 80";
    }else if(event.which === 81){
        document.getElementById("output").innerHTML = "You've pressed the q key. It's key code is 81";
    }else if(event.which === 82){
        document.getElementById("output").innerHTML = "You've pressed the r key. It's key code is 82";
    }else if(event.which === 83){
        document.getElementById("output").innerHTML = "You've pressed the s key. It's key code is 83";
    }else if(event.which === 84){
        document.getElementById("output").innerHTML = "You've pressed the t key. It's key code is 84";
    }else if(event.which === 85){
        document.getElementById("output").innerHTML = "You've pressed the u key. It's key code is 85";
    }else if(event.which === 86){
        document.getElementById("output").innerHTML = "You've pressed the v key. It's key code is 86";
    }else if(event.which === 87){
        document.getElementById("output").innerHTML = "You've pressed the w key. It's key code is 87";
    }else if(event.which === 88){
        document.getElementById("output").innerHTML = "You've pressed the x key. It's key code is 88";
    }else if(event.which === 89){
        document.getElementById("output").innerHTML = "You've pressed the y key. It's key code is 89";
    }else if(event.which === 90){
        document.getElementById("output").innerHTML = "You've pressed the z key. It's key code is 90";
    }else{
        document.getElementById("output").innerHTML = "No key code found. Please press another key";
    }

    
  })

  
  
