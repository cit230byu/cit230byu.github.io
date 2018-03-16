//JavaScript Document
var high = 90;
var low = 66;
var windspeed = 5;

var averageTemp = ((high -low) / 2) + low;
var windChill = 35.74 + 0.6215 * averageTemp - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * averageTemp * Math.pow(windspeed, 0.16);
windChill = Math.round(windChill);

document.getElementById("windChill").innerHTML= windChill;