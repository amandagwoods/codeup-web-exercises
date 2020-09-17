"use strict";
$(document).ready(function(){
//---------mapbox--------
    mapboxgl.accessToken = mapboxToken;

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 10,
        center: {lng: -97.3208, lat: 32.7254},
    });


//-----------marker----------
    var marker = new mapboxToken.marker();
    marker.settingLngLat({lng: -97.3208, lat: 32.7254});
    marker.addTo(map);
    marker.setDraggable(true);

    //----------FW Weather-------------------------

    var openWeatherAPIURL = "http://api.openweathermap.org/data/2.5/forecast";

    $.get(openWeatherAPIURL, {
        APPID: owmKey,
        q: "Fort Worth, TX, US",
        units: "imperial",
        exclude: "minutely, current, hourly",
        timezone: "Chicago"
    }).done(function (data) {
        console.log("5 day forecast",data);
    });

    //----------5 day forecast---------------

    function weeklyForecast() {
        $.get(weatherUrl, weatherOptions).done(function (data) {
            console.log(data);
            console.log(data.daily);
            console.log(data.daily[0]);
            data.daily.forEach(function (day, index) {
                if (index <= 4) {
                    var grabDate = new Date(day.dt * 1000);
                    var html = "<div class='card-body'>";
                    html += "<div class='card-header text-center'>" + " " + (grabDate.getMonth() + 1) + "/" + grabDate.getDate() + "/" + grabDate.getFullYear() + "</div>";
                    html += "<li class='list-group-item'>" + "High/Lows: " + day.temp.max + " &#8457;" + "/" + day.temp.min + " &#8457;" + "</li>";
                    html += "<li class='list-group-item'>" + "Description: " + day.weather[0].description + "</li>";
                    html += "<li class='list-group-item'>" + "Humidity: " + day.humidity + "</li>";
                    html += "<li class='list-group-item'>" + "Wind: " + day.wind_speed + "</li>";
                    html += "<li class='list-group-item'>" + "Pressure: " + day.pressure + "</li>";
                    html += "</div>";
                    $('#weather-info').append(html);
                }
            });
        });
    };

    //---------weather based on marker-------
    function markerDaily() {
        var lngLat = marker.getLngLat();
        var longitude = lngLat.lng;
        var latitude = lngLat.lat;
        weatherOptions.lat = latitude
        weatherOptions.lon = longitude
        reverseGeocode({lng: longitude, lat: latitude}, mapboxKey).then(function (result) {
            $('#current-city').empty()
            $('#current-city').append("Current Location " + result)
        });
        weeklyForecast();
    }


    //----------search bar-------------
    var searchBar = document.querySelector('#input');
    $("newLocation").click(function (e) {
        e.preventDefault();
        geocode(searchBar.value, mapboxKey).then(function (result) {
            map.setCenter(result);
            map.setZoom(10);
            marker.setLngLat(result);
            markerDaily();
        });
    });
    weeklyForecast();
    marker.on("dragend", markerDaily());



})
