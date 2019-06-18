function myFunction() {
  alert("I am an alert box!");
}
function formValidation1() {
	// Make quick references to our fields.
	var CustomerName = document.getElementById('customerName');
	var CustomerAdd = document.getElementById('customerAddress');
	var pincode = document.getElementById('customerPinCode');
	var email = document.getElementById('customerEmail');
	var contactNumber = document.getElementById('customerNumber');
	
	
	
	// Check each input in the order that it appears in the form.
	
	
		if(inputAlphabet(CustomerName, "* For Customer Name please use alphabets only *")){
			if ((textNumeric(pincode, "* Please enter a valid pin code *")) && (lengthDefine(pincode, 6, 6))) {
				if (emailValidation(email, "* Please enter a valid email address *")) {
					if (textNumeric(contactNumber, "* Please enter numeric digits only *")) {
							
							return true;
							}
						}
					}
				}
		return false;
}

//Function that checks whether input text is an alphabetic character or not.
function inputAlphabet(inputtext, alertMsg) {
var alphaExp = /^[a-z A-Z]+$/;
if (inputtext.value.match(alphaExp)) {
return true;
} else {
document.getElementById('p1').innerText = alertMsg; // This segment displays the validation rule for name.
//alert(alertMsg);
inputtext.focus();
return false;
}
}

/*//Function that checks whether input text is an alphabetic character or not.
function inputAlphabet1(inputtext, alertMsg) {
var alphaExp = /^[a-z A-Z]+$/;
if (inputtext.value.match(alphaExp)) {
return true;
} else {
document.getElementById('p8').innerText = alertMsg; // This segment displays the validation rule for name.
//alert(alertMsg);
inputtext.focus();
return false;
}
}*/

//Function that checks whether the input characters are restricted according to defined by user.
function lengthDefine(inputtext, min, max) {
var uInput = inputtext.value;
if (uInput.length >= min && uInput.length <= max) {
return true;
} else {
document.getElementById('p2').innerText = "* Please enter between " + min + " and " + max + " characters *"; // This segment displays the validation rule for username
inputtext.focus();
return false;
}
}

//Function that checks whether an user entered valid email address or not and displays alert message on wrong email address format.

function emailValidation(inputtext, alertMsg){
var emailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputtext.value.match(emailExp)){
return true;
}else{
document.getElementById('p3').innerText = alertMsg; //This segment displays the validation rule for E-mail.
inputtext.focus();
return false;
}
}

//Function that checks whether a option is selected from the selector and if it's not it displays an alert message.
function trueSelection(inputtext, alertMsg) {
if (inputtext.value == "Please Choose") {
document.getElementById('p9').innerText = alertMsg; //this segment displays the validation rule for selection.
inputtext.focus();
return false;
} else {
return true;
}
}

//Function that checks whether input text includes alphabetic and numeric characters.
function textAlphanumeric(inputtext, alertMsg) {
var alphaExp = /^[0-9a-zA-Z]+$/;
if (inputtext.value.match(alphaExp)) {
return true;
} else {
document.getElementById('p0').innerText = alertMsg; // This segment displays the validation rule for address.
inputtext.focus();
return false;
}
}

//Function that checks whether input text is numeric or not.
function textNumeric(inputtext, alertMsg) {
var numericExpression = /^[0-9]+$/;
if (inputtext.value.match(numericExpression)) {
return true;
} else {
//document.getElementById('p3').innerText = alertMsg; // This segment displays the validation rule for zip.
document.getElementById('p2').innerText = alertMsg; // This segment displays the validation rule for zip.

inputtext.focus();
return false;
}
}
//Function that checks whether input text is numeric or not.
function textNumeric(inputtext, alertMsg) {
var numericExpression = /^[0-9]+$/;
if (inputtext.value.match(numericExpression)) {
return true;
} else {
document.getElementById('p4').innerText = alertMsg; // This segment displays the validation rule for zip.
//document.getElementById('p5').innerText = alertMsg; // This segment displays the validation rule for zip.

inputtext.focus();
return false;
}
}
//Function that checks whether a option is selected from the selector and if it's not it displays an alert message.
function trueSelection(inputtext, alertMsg) {
if (inputtext.value == "Please Choose") {
document.getElementById('p9').innerText = alertMsg; //this segment displays the validation rule for selection.
inputtext.focus();
return false;
} else {
return true;
}
}

