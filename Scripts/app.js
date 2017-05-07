(function ()
{
    var app = angular.module('cpfd', []);
    app.controller('ClinicController', function () { });
    app.controller('TabController', function ()
    {
        this.tab = 1;
        this.setTab = function (newValue)
        {
            this.tab = newValue;
        };
        this.isSet = function (tabName)
        {
            return this.tab === tabName;
        };

    });


})(); 



var mapPoa, mapPel;        

var uluruPoa = {lat: -30.030644, lng: -51.228375};
//var mapPoaCenter=new google.maps.LatLng(-30.030644, -51.228375); //POA
var mapPoaCenter=new google.maps.Map(document.getElementById("mapPoa-canvas"),{
    zoom: 15,
    center: uluruPoa    
});

//LatLng(-30.030644, -51.228375); //POA

var mapPelCenter=new google.maps.LatLng(-31.775409, -52.339755); //Pel

var markerPoa=new google.maps.Marker({
    position:mapPoaCenter
});
var markerPel=new google.maps.Marker({
    position:mapPelCenter,
    title:"Rua Gen. Andrade Neves, 155. cj 52"
});

function initialize() {
  var mapPoaProp = {
      center:mapPoaCenter,
      zoom: 15,
      draggable: true,
      scrollwheel: true,
      mapTypeId:google.maps.MapTypeId.ROADMAP
  };
   var mapPelProp = {
      center:mapPelCenter,
      zoom: 15,
      draggable: true,
      scrollwheel: true,
      mapTypeId:google.maps.MapTypeId.ROADMAP
  }; 

  //mapPoa=new google.maps.Map(document.getElementById("mapPoa-canvas"),mapPoaProp);
  mapPoa =new google.maps.Map(document.getElementById("mapPoa-canvas"),{
      zoom: 15,
      center: uluruPoa    
  });
  mapPel=new google.maps.Map(document.getElementById("mapPel-canvas"),mapPelProp);
  markerPoa.setMap(mapPoa);
  markerPel.setMap(mapPel);

     
  google.maps.event.addListener(markerPoa, 'click', function() {
    var contentString =   '<div id="content">' +
                            'Rua Gen. Andrade Neves, 155. cj 52. Porto Alegre - RS' + 
                           '</div>';


    var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 400
        });
      
    infowindow.setContent(contentString);
    infowindow.open(mapPoa, markerPoa);   
    
  }); 
  
  google.maps.event.addListener(markerPel, 'click', function() {
    var contentString =   '<div id="content">' +
                            'Rua Três de Maio, 719. Pelotas - RS' + 
                           '</div>';
 
    var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 400
        });
     
    infowindow.setContent(contentString);
    infowindow.open(mapPel, markerPel);   
    
  }); 
};
google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.addDomListener(window, "resize", resizingMap());

$(window).on('shown.bs.modal', function (){resizingMap();});

$('#POAMapModal').on('shown.bs.modal', function ()
{
    //Must wait until the render of the modal appear, thats why we use the resizeMap and NOT resizingMap!! ;-)  
   // resizeMapPoa();
})

$('#PelMapModal').on('show.bs.modal', function() {
   //Must wait until the render of the modal appear, thats why we use the resizeMap and NOT resizingMap!! ;-)
   //resizeMapPel();
})

function resizeMapPoa() {
   if(typeof mapPoa =="undefined") return;
   setTimeout( function(){resizingMapPoa();} , 400);
}

function resizingMapPoa() {
 if(typeof mapPoa =="undefined") return;
   var centerPoa = mapPoa.getCenter();
   google.maps.event.trigger(mapPoa, "resize");
   mapPoa.setCenter(centerPoa);   
}

function resizingMap()
{
    resizingMapPoa();
    resizingMapPel();

}

function resizeMapPel() {
   if(typeof mapPoa =="undefined") return;
   setTimeout( function(){resizingMapPel();} , 400);
}

function resizingMapPel() {
   if(typeof mapPel =="undefined") return;
   var centerPel = mapPel.getCenter();   
   google.maps.event.trigger(mapPel, "resize");
   mapPel.setCenter(centerPel); 
}


function  initMap(){
  initMapPoa();
}

     function initMapPoa() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('mapPoa-canvas'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
