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
  var uluruPoa,uluruPel;
  var mapPoaCenter, mapPelCenter;
  var markerPoa, markerPel;

function startAll(){     

    ////originalmaps uluruPoa = {lat: -25.363, lng: 131.044};
    uluruPoa = {lat: parseFloat(-30.030), lng: parseFloat(-51.228)};
    uluruPel = {lat: parseFloat(-31.775), lng: parseFloat(-52.339)};
  //var mapPoaCenter=new google.maps.LatLng(-30.030644, -51.228375); //POA
    mapPoaCenter= new google.maps.Map(document.getElementById("mapPoa-canvas"),{
        zoom: 15,
        center: uluruPoa    
    });


  mapPelCenter=new google.maps.Map(document.getElementById("mapPel-canvas"),{
      zoom: 15,
      center: uluruPel
  });

  markerPoa=new google.maps.Marker({
        position:uluruPoa,
        title: 'Rua Gen. Andrade Neves, 155. cj 52',
        map: mapPoaCenter
    });

    markerPel=new google.maps.Marker({
        position:uluruPel,
        title:"Rua Gen. Andrade Neves, 155. cj 52",
        map: mapPelCenter
    });


}


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
  mapPel=new google.maps.Map(document.getElementById("mapPel-canvas"),{
    zoom: 15,
    center: uluruPel
  });
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
  function addDOMListeners(){
  //  google.maps.event.addDomListener(window, 'load', initialize);
  //  google.maps.event.addDomListener(window, "resize", resizingMap());

  }

$(window).on('shown.bs.modal', function (){resizingMap();startAll();});

$('#POAMapModal').on('shown.bs.modal', function ()
{
  console.log('shown');
  //startAll();
    //Must wait until the render of the modal appear, thats why we use the resizeMap and NOT resizingMap!! ;-)  
   // resizeMapPoa();
})

$('#POAMapModal').on('show.bs.modal', function ()
{
  console.log('show');
  //startAll();
    //Must wait until the render of the modal appear, thats why we use the resizeMap and NOT resizingMap!! ;-)  
   // resizeMapPoa();
})

$('#POAMapModal').on('shown', function ()
{
  //startAll();
  console.log('shown');
    //Must wait until the render of the modal appear, thats why we use the resizeMap and NOT resizingMap!! ;-)  
   // resizeMapPoa();
})
$('#POAMapModal').on('show', function ()
{
  //startAll();
  console.log('show');
    //Must wait until the render of the modal appear, thats why we use the resizeMap and NOT resizingMap!! ;-)  
   // resizeMapPoa();
})

$('#PelMapModal').on('show.bs.modal', function() {
  //startAll();
   //Must wait until the render of the modal appear, thats why we use the resizeMap and NOT resizingMap!! ;-)
   //resizeMapPel();
})

function resizeMapPoa() {
   if(typeof mapPoa =="undefined") return;
   setTimeout( function(){resizingMapPoa();} , 400);
}
function resizeMapPel() {
   if(typeof mapPoa =="undefined") return;
   setTimeout( function(){resizingMapPel();} , 400);
}


function resizingMapPoa() {
 if(typeof mapPoa =="undefined") return;
   var centerPoa = mapPoa.getCenter();
   google.maps.event.trigger(mapPoa, "resize");
   mapPoa.setCenter(centerPoa);   
}
function resizingMapPel() {
   if(typeof mapPel =="undefined") return;
   var centerPel = mapPel.getCenter();   
   google.maps.event.trigger(mapPel, "resize");
   mapPel.setCenter(centerPel); 
}

function resizingMap()
{
    resizingMapPoa();
    resizingMapPel();

}





function  initMap(){
  initMapPoa();
}

  function initMapPoa() {
      var uluru = {lat: parseFloat(-25.363), lng: parseFloat(131.044)};
      var map = new google.maps.Map(document.getElementById('mapPoa-canvas'), {
        zoom: 4,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
  }

$( document ).ready(function() {
    
    startAll();

    console.log('ready');


});
/*
$("#contactForm").submit(function(event){
    // cancels the form submission
    event.preventDefault();
    submitForm();
});

*/
function preSubmit(){
        submitForm();

}
function submitForm(){
    // Initiate Variables With Form Content
    
    var _name = $("#Name").val();
    var _email = $("#InputEmail").val();
    var _ddd = $("#DDD").val();
    var _phone = $("#Phone").val();
    var _message = $("#MessageArea").val();
 
    $.ajax({
        type: "POST",
        url: "Pages/contato.php",
        data: "Name=" + _name 
            + "&InputEmail=" + _email 
            + "&DDD=" + _ddd 
            + "&Phone=" + _phone 
            +  "&MessageArea=" + _message,
        success : function(text){

            if (text == "success"){
                console.log("success"); 
                formSuccess();
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
          console.log("Status: " + textStatus); console.log("Error: " + errorThrown); 
        }
    });
}
function formSuccess(){
    $( "#msgSubmit" ).removeClass( "hidden" );
}