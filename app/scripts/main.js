/* global google */

'use strict';

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($('.navbar').offset().top > 50) {
        $('.navbar-fixed-top').addClass('top-nav-collapse');
    } else {
        $('.navbar-fixed-top').removeClass('top-nav-collapse');
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
});

var weAreAt = new google.maps.LatLng(37.4753168, 126.9884097);

var myOptions = {
    zoom: 17,
    center: weAreAt,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

var map = new google.maps.Map(document.getElementById('map'), myOptions);
new google.maps.Marker({
    position: weAreAt,
    map: map,
    title: 'The Whale Games'
});

