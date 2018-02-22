function doInputOutput() { //input
var tempF = document.getElementById('tInputBox').value; //get a temperature from the first text field
var speed = document.getElementById('sInputBox').value; //get a wind speed from the second text field
var wchill = windChill(tempF, speed) //store the value returned by windChill in a variable
document.getElementById ('outputDiv').innerHTML = "is " + wchill + " Fahrenheit";
} //output the value returned//


// Compute windchill using inputs and return wind chill

// taking temperature and speed from first function
function windChill(tempF, speed)  {
return Math.round(35.74 + (0.6215 * tempF) - (35.75 * (speed ** 0.16)) + ((0.4275 * tempF) * (speed ** 0.16)));
} //calculating with formula then returning value

