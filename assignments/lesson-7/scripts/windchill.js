function doInputOutput() {

var speed = parseFloat(document.getElementById('sInputBox').value); //get a wind speed from the second text field
var h = parseFloat(document.getElementById('hInputBox').value); //get a high temp from the second text field
var l = parseFloat(document.getElementById('lInputBox').value); //get a low temp from the second text field
var tempF = (h+l) / 2 //compute temperature
var wchill = windChill(tempF, speed) //store the value returned by windChill in a variable
document.getElementById ('outputDiv').innerHTML = "Wind Chill factor is " + wchill + " Fahrenheit";
} //output the value returned//

// Compute windchill

// taking temperature and speed from first function
function windChill(tempF, speed)  {
return Math.round(35.74 + (0.6215 * tempF) - (35.75 * (speed ** 0.16)) + ((0.4275 * tempF) * (speed ** 0.16)));
} //calculating with formula then returning value