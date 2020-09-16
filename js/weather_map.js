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
    var marker = new mapboxToken.Marker();
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

    $.ajax("").done(function(fiveDay){
        var html = "";
        $("#weather").empty();
        fiveDay.forEach(function(weather){
            html = "<div class="card">";
            html += "<img src=\"https://via.placeholder.com/350x150\" class=\"card-img-top\" alt\="...">\"
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
            </div>

        })
    })


    // $.ajax("").done(function(fiveDay){
    //     var html = "";
    //     $("#weather").empty();
    //     fiveDay.forEach(function(weather) {
    //         html = "<div class=\"card\">\n" +
    //             "    <img class=\"card-img-top\" src=\"https://via.placeholder.com/350x150\" alt=\"Card image cap\">\n" +
    //             "    <div class=\"card-body\">\n" +
    //             "      <h5 class=\"card-title\">"+weather.list.i[1]+"</h5>\n" +
    //             "      <p class=\"card-text\">"+weather.content+"</p>\n" +
    //             "      <p class=\"card-text\"><small class=\"text-muted\">"+weather.date+"</small></p>\n" +
    //             "      <p class=\"card-text\"><small class=\"text-muted\">"+weather.categories+"</small></p>"+
    //             "      <p class=\"card-footer\"><small class=\"text-muted\">"+weather.categories+"</small></p>"+
    //             "    </div>\n" +
    //             "  </div>";
    //         $("#posts").append(html);
    //                 <div class="card-footer">
    //                     <small class="text-muted">Last updated 3 mins ago</small>
    //                 </div>
    //         </div>
    //     });
    // });




})
