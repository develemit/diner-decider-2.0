$(document).ready(function() {
  console.log("ready!");

  var infowindow;



  $('#submit').click(function(props) {
      console.log("clicked", event, props);
    var price = $('#price-select').val();
    var distance = $('#distance-select').val();
    var cuisine = $('#cuisine-select').val();
    var miles = $('#distance-select option:selected').text();

    // $('#map').css({
    //   "border": "2px solid black",
    //   "position": "absolute",
    //   "bottom": "1%",
    //   "right": "27%",
    //   "display": "inline-block",
    //   "color": "black",
    //   "height": "28vh",
    //   "width": "45vw",
    // })

    var map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: 33.448376,
        lng: -112.074036
      },
      zoom: 15
    });
    var infoWindow = new google.maps.InfoWindow({
      map: map
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('You are Here!.');
        map.setCenter(pos);
        var marker = new google.maps.Marker({
          position: pos,
          map: map
        });

        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
          location: pos,
          radius: distance,
          type: ['restaurant'],
          keyword: cuisine,
          maxPriceLevel: price,
        }, callback);

        function callback(results, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
              results.sort(function() {
                return Math.random() - .5
              })


              var request = {
                placeId: results[i].place_id
              };

              service = new google.maps.places.PlacesService(map);
              service.getDetails(request, callback);

              function callback(place, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {}
              }
            }
            console.log(results[0]);

            $.ajax({
                "url": `https://developers.zomato.com/api/v2.1/search?q=${cuisine}&lat=${pos.lat}&lon=${pos.lng}&radius=${distance}`,
                headers: {
                  "user-key": "5fb9a10ef535abdb7bbc830e44d17a8f"
                }
              })
              .done(function(result) {
                for (i = 0; i < result.restaurants.length; i++) {


                  result.restaurants.sort(function(options) {
                    return Math.random() - .5
                  })
                  var winner = result.restaurants[0].restaurant;
                }
                console.log(result)

                if (result.restaurants.length > 0) {

                  $('#map').empty().append(`<span id="chosen-name">${winner.name}</span><br>
                  <span id="chosen-address">${winner.location.address}</span><br>
                  <a href="https://www.google.com/maps/search/${winner.name}+${winner.location.address}" target="_blank"><span>Get Directions</span></a>`)
                  $('#map span').css({
                    "background-color": "white",
                    "color": "black",
                  })
                  $('#map').css({
                    "background-image": `url(flags/${cuisine}.gif)`,
                    "background-repeat": "no-repeat",
                    "background-size": "100% 100%",
                  })
                } else {
                  $('#map').css({
                    "background-image": "url(pictures/notfound.gif)",
                    "background-repeat": "no-repeat",
                    "background-size": "100% 100%",
                    "color": "white",

                    "display": "inline-block",
                    "height": "28vh",
                    "width": "45vw",
                  })
                  $('#map').empty().append(`<span id="not-found">Sorry, doesn't look like there's a ${cuisine} place within ${miles} of you.</span>`)
                }
              })

          }
        }

      }, function(error) {
        if (error.code == error.PERMISSION_DENIED)
          $('#map').empty().css({
            "background-image": "url(pictures/noloco.gif)",
            "background-repeat": "no-repeat",
            "background-size": "100% 100%",
            "color": "white",

            "display": "inline-block",
            "height": "28%",
            "width": "45vw",
          })
        $('#map').append(`<span id="chosen-name">Location Services Required</span>`)
      });
      //     function() {
      //       handleLocationError(true, infoWindow, map.getCenter());
      //     });
      // } else {
      //   // Browser doesn't support Geolocation
      //   handleLocationError(false, infoWindow, map.getCenter());
      //
      // }
      //
      // function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      //   infoWindow.setPosition(pos);
      //   infoWindow.setContent(browserHasGeolocation ?
      //     'Error: The Geolocation service failed.' :
      //     'Error: Your browser doesn\'t support geolocation.');
      //
      // }
      // navigator.geolocation.watchPosition(function(position) {
      //     console.log("i'm tracking you!");
    }
//Below code is to watch for portrait orientation
    // function checkPosition() {
    //   if (window.matchMedia('(orientation: portrain)').matches) {
    //     //...
    //   } else {
    //     //...
    //   }
    // }
  })
});
