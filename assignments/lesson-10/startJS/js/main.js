// JavaScript Document

var weatherObject = new XMLHttpRequest();

weatherObject.open('GET', 'https://api.wunderground.com/api/991f1337748bc20b/conditions/q/MN/Franklin.json', 'true');

weatherObject.send();

weatherObject.onload = function() {
    
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.full;
    document.getElementById('precip').innerHTML = weatherInfo.current_observation.precip_today_in;
    document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f;
    document.getElementById('currentUv').innerHTML = weatherInfo.current_observation.UV;
    document.getElementById('feelslike').innerHTML = weatherInfo.current_observation.feelslike_f;
    document.getElementById('windchill').innerHTML = weatherInfo.current_observation.windchill_f;
    document.getElementById('winddirection').innerHTML = weatherInfo.current_observation.wind_dir;
    document.getElementById('wicon').src = weatherInfo.current_observation.icon_url;



    
    
} //end of onload