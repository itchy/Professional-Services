// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

$(document).ready(function() {
  // alert('Welcome!');    
  // $('div#map_canvas').goMap({
  //    zoom: 10,
  //    maptype: 'ROADMAP',
  //    markers: [
  //      {address: '2860 Duffton Loop, Tallahassee, FL 32303', icon: '../img/map-green.png', html: '2860 Duffton Loop'},
  //    ],
  //    hideByClick: true});
  $('form.html5').html5form_custom();
  $('div#map_canvas').get_map();
  
  // alert('Welcome!');    
  
  
});


$.fn.extend({

 get_map: function() {    
  var $this = $(this);
  var center_latlng = new google.maps.LatLng(36.104312, -95.9260086);
  var office_latlng = new google.maps.LatLng(36.103771, -95.941394);
  var myOptions = {
    zoom: 13,
    mapTypeControl: false,
    panControl: false,
    scrollwheel: false,
    center: center_latlng,
    zoomControlOptions: {style: google.maps.ZoomControlStyle.SMALL },
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions); 
  var marker = new google.maps.Marker({
       position: office_latlng, 
       map: map, 
       title:"Hello World!"
   });
    
  }

});  
