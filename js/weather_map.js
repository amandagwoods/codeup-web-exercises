$(document).ready(function(){



    var openWeatherAPIURL = "http://api.openweathermap.org/data/2.5/weather";

    $.get(openWeatherAPIURL, {
        APPID: owmKey,
        q: "Fort Worth, TX, US",
        units: "imperial"
    }).done(function (data) {
        console.log(data);
    });

    // var openWeatherDailyForecastAPIURL = "http://api.openweathermap.org/data/2.5/forecast";
    // $.get(openWeatherDailyForecastAPIURL, {
    //     APPID: owmKey,
    //     q: "Dallas, TX, US",
    //     unit: "imperial"
    // }).done(function(data){
    //     console.log(data);
    // })
    //
    //
    // $.get("http://api.openweathermap.org/data/2.5/forecast", {
    //     APPID: owmKey,
    //     lat: 29.423017,
    //    lon: -98.48527
    // }).done(function (data) {
    //     console.log("5 day forecast", data);
    // });

})
