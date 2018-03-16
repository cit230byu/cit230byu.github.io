// JavaScript Document

var weatherObject = new XMLHttpRequest();

weatherObject.open('GET', 'https://api.wunderground.com/api/991f1337748bc20b/conditions/q/OR/Springfield.json', 'true');

weatherObject.send();

weatherObject.onload = function() {
    
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.full;
    document.getElementById('precip').innerHTML = weatherInfo.current_observation.precip_today_in;
    document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f;
    document.getElementById('currentUv').innerHTML = weatherInfo.current_observation.UV;
    document.getElementById('feelslike').innerHTML = weatherInfo.current_observation.feelslike_f;
    document.getElementById('winddirection').innerHTML = weatherInfo.current_observation.wind_dir;
    document.getElementById('wind').innerHTML = weatherInfo.current_observation.wind_gust_mph;
    document.getElementById('wicon').src = weatherInfo.current_observation.icon_url;



    
    
} //end of onload


//Ten Day Forecast

var weatherObject10 = new XMLHttpRequest();
weatherObject10.open('GET', 'https://api.wunderground.com/api/991f1337748bc20b/forecast10day/q/OR/Springfield.json', 'true');
weatherObject10.send();

weatherObject10.onload = function() {
    var weather10day = JSON.parse(weatherObject10.responseText);
    console.log(weather10day);
    
    
//day0
    document.getElementById('day0High').innerHTML = weather10day.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
    document.getElementById('day0Low').innerHTML = weather10day.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
    document.getElementById('day0icon').src = weather10day.forecast.simpleforecast.forecastday["0"].icon_url;
    
//day1
    document.getElementById('day1High').innerHTML = weather10day.forecast.simpleforecast.forecastday["1"].high.fahrenheit;
    document.getElementById('day1Low').innerHTML = weather10day.forecast.simpleforecast.forecastday["1"].low.fahrenheit;
    document.getElementById('day1icon').src = weather10day.forecast.simpleforecast.forecastday["1"].icon_url;
    
//day2
    document.getElementById('day2High').innerHTML = weather10day.forecast.simpleforecast.forecastday["2"].high.fahrenheit;
    document.getElementById('day2Low').innerHTML = weather10day.forecast.simpleforecast.forecastday["2"].low.fahrenheit;
    document.getElementById('day2icon').src = weather10day.forecast.simpleforecast.forecastday["2"].icon_url;

//day3
    document.getElementById('day3High').innerHTML = weather10day.forecast.simpleforecast.forecastday["3"].high.fahrenheit;
    document.getElementById('day3Low').innerHTML = weather10day.forecast.simpleforecast.forecastday["3"].low.fahrenheit;
    document.getElementById('day3icon').src = weather10day.forecast.simpleforecast.forecastday["3"].icon_url;
    
//day4
    document.getElementById('day4High').innerHTML = weather10day.forecast.simpleforecast.forecastday["4"].high.fahrenheit;
    document.getElementById('day4Low').innerHTML = weather10day.forecast.simpleforecast.forecastday["4"].low.fahrenheit;
    document.getElementById('day4icon').src = weather10day.forecast.simpleforecast.forecastday["4"].icon_url;
        
//day5
    document.getElementById('day5High').innerHTML = weather10day.forecast.simpleforecast.forecastday["5"].high.fahrenheit;
    document.getElementById('day5Low').innerHTML = weather10day.forecast.simpleforecast.forecastday["5"].low.fahrenheit;
    document.getElementById('day5icon').src = weather10day.forecast.simpleforecast.forecastday["5"].icon_url;
    
//day6
    document.getElementById('day6High').innerHTML = weather10day.forecast.simpleforecast.forecastday["6"].high.fahrenheit;
    document.getElementById('day6Low').innerHTML = weather10day.forecast.simpleforecast.forecastday["6"].low.fahrenheit;
    document.getElementById('day6icon').src = weather10day.forecast.simpleforecast.forecastday["6"].icon_url;

 //day7
    document.getElementById('day7High').innerHTML = weather10day.forecast.simpleforecast.forecastday["7"].high.fahrenheit;
    document.getElementById('day7Low').innerHTML = weather10day.forecast.simpleforecast.forecastday["7"].low.fahrenheit;
    document.getElementById('day7icon').src = weather10day.forecast.simpleforecast.forecastday["7"].icon_url;
       
//day8
    document.getElementById('day8High').innerHTML = weather10day.forecast.simpleforecast.forecastday["8"].high.fahrenheit;
    document.getElementById('day8Low').innerHTML = weather10day.forecast.simpleforecast.forecastday["8"].low.fahrenheit;
    document.getElementById('day8icon').src = weather10day.forecast.simpleforecast.forecastday["8"].icon_url;
        
//day9
    document.getElementById('day9High').innerHTML = weather10day.forecast.simpleforecast.forecastday["9"].high.fahrenheit;
    document.getElementById('day9Low').innerHTML = weather10day.forecast.simpleforecast.forecastday["9"].low.fahrenheit;
    document.getElementById('day9icon').src = weather10day.forecast.simpleforecast.forecastday["9"].icon_url;
        
}