// Page scrolling
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 600, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Google Maps Scripts
// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
google.maps.event.addDomListener(window, 'load', init);
function init() {
    var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(-31.54464, 152.847115), // New York
        disableDefaultUI: true,
        scrollwheel: true,
        draggable: true,
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#D3E9EA"
            }]
        }, {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{
                "color": "#FFE6E8"
            }]
        }, {
            "featureType": "road",
            "elementType": "all",
            "stylers": [{
                "saturation": -100
            }, {
                "lightness": 45
            }]
        }, {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }]
    };

    //create a info window to show when a maker is clicked
    var infowindow = null;
    var infoWindowFn = function() {
        if (infowindow) {
            infowindow.close();
        }
        infowindow = new google.maps.InfoWindow({
            content: '<h3>' + this.data_name + '</h3><p>' + this.data_sub + '</p><a href="' + this.data_link +'" target="_blank">View on Google Maps</a>',
        });
        infowindow.open(map,this);
        map.panTo(this.position);
    };

    var mapElement = document.getElementById('map-zone');
    var map = new google.maps.Map(mapElement, mapOptions);

    var homeImage = 'img/map-marker.png';
    var homeMarker = new google.maps.Marker({
        position: new google.maps.LatLng(-31.54464, 152.847115),
        map: map,
        icon: homeImage,
        data_name: 'Mum &amp; Dad’s' ,
        data_sub: 'Meet Here' ,
        data_link: 'https://goo.gl/maps/YKLKq'
    });
    google.maps.event.addListener(homeMarker, 'click', infoWindowFn);

    var ceremonyImage = 'img/map-marker.png';
    var ceremonyMarker = new google.maps.Marker({
        position: new google.maps.LatLng(-31.537030, 152.853507),
        map: map,
        icon: ceremonyImage,
        data_name: 'Ceremony',
        data_sub: 'At the swamp.',
        data_link: 'https://goo.gl/maps/t6Ifs'
    });
    google.maps.event.addListener(ceremonyMarker, 'click', infoWindowFn);

    var receptionImage = 'img/map-marker.png';
    var receptionMarker = new google.maps.Marker({
        position: new google.maps.LatLng(-31.4286016, 152.908314),
        map: map,
        icon: receptionImage,
        data_name: 'Reception',
        data_sub: 'Town Green Inn.',
        data_link: 'https://goo.gl/maps/BmIHq'
    });
    google.maps.event.addListener(receptionMarker, 'click', infoWindowFn);

    $('a.map-link').bind('click', function(event) {
        event.preventDefault();
        marker = eval($(this).data('location') + 'Marker');
        google.maps.event.trigger(marker, 'click');
    });
}
