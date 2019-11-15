var special = "!@#$%^&*()_+-=[]\{}|;:";

var lower = "abcdefghijklmnopqrstuvwxyz";

var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var number = "0123456789";

var charpool = "";

var array = [];

var password = "";

var length = document.getElementById("length");


var confspecial = document.getElementById("Characters");

var confnumber = document.getElementById("numchar");

var conflower = document.getElementById("upperletter");

var confupper = document.getElementById("lowerletter");


function myFunction(){ 

    array = [confspecial.checked, confnumber.checked, conflower.checked, confupper.checked];
    console.log (array)

    if (confspecial.checked) {
        charpool += special
    }




    if (confupper.checked) {
        charpool += upper

    }

    if (conflower.checked) {
        charpool += number
    }

    if (confnumber.checked) {
        charpool += number
    }

    for (var i=0; i<length.value; i++) { 
        password += charpool.charAt(Math.floor(Math.random() * charpool.length));
    }
    return document.getElementById("password").innerText = password;
} 


myFunction();
