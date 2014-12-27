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
    /*
    app.directive('home',function()
    {
    return
    {
    restrict: 'E',
    templateUrl: 'home.html',
    controller: function()
    {
    this.tab=1;
    this.isSet = function(checkTab)
    {
    return this.tab === checkTab;
    };
    this.setTab = function(setTab)
    {
    this.tab = setTab;
    };
    },
    controllerAs:'tab'
    };
    });

    
    app.directive('formacao',function()
    {
    return
    {
    restrict: 'E',
    templateUrl: 'formacao.html',
    controller: function()
    {
    this.tab=1;
    this.isSet = function(checkTab)
    {
    return this.tab === checkTab;
    };
    this.setTab = function(setTab)
    {
    this.tab = setTab;
    };
    },
    controllerAs:'tab'
    };
    });
    app.directive('atuacao',function()
    {
    return
    {
    restrict: 'E',
    templateUrl: 'atuacao.html',
    controller: function()
    {
    this.tab=1;
    this.isSet = function(checkTab)
    {
    return this.tab === checkTab;
    };
    this.setTab = function(setTab)
    {
    this.tab = setTab;
    };
    },
    controllerAs:'tab'
    };
    });
    app.directive('convenios',function()
    {
    return
    {
    restrict: 'E',
    templateUrl: 'convenios.html',
    controller: function()
    {
    this.tab=1;
    this.isSet = function(checkTab)
    {
    return this.tab === checkTab;
    };
    this.setTab = function(setTab)
    {
    this.tab = setTab;
    };
    },
    controllerAs:'tab'
    };
    });
    app.directive('atendimento',function()
    {
    return
    {
    restrict: 'E',
    templateUrl: 'atendimento.html',
    controller: function()
    {
    this.tab=1;
    this.isSet = function(checkTab)
    {
    return this.tab === checkTab;
    };
    this.setTab = function(setTab)
    {
    this.tab = setTab;
    };
    },
    controllerAs:'tab'
    };
    });
    app.directive('contato',function()
    {
    return
    {
    restrict: 'E',
    templateUrl: 'contato.html',
    controller: function()
    {
    this.tab=1;
    this.isSet = function(checkTab)
    {
    return this.tab === checkTab;
    };
    this.setTab = function(setTab)
    {
    this.tab = setTab;
    };
    },
    controllerAs:'tab'
    };
    });


    */
})();       //?



var mapPoa, mapPel;        
var mapPoaCenter=new google.maps.LatLng(-30.030644, -51.228375); //POA
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

  mapPoa=new google.maps.Map(document.getElementById("mapPoa-canvas"),mapPoaProp);
  mapPel=new google.maps.Map(document.getElementById("mapPel-canvas"),mapPelProp);
  markerPoa.setMap(mapPoa);
  markerPel.setMap(mapPel);
    
  google.maps.event.addListener(markerPoa, 'click', function() {
      
    infowindow.setContent(contentString);
    infowindow.open(mapPoa, markerPoa);   
    
  }); 
  
  google.maps.event.addListener(markerPel, 'click', function() {
      
    infowindow.setContent(contentString);
    infowindow.open(mapPel, markerPel);   
    
  }); 
};
google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.addDomListener(window, "resize", resizingMap());

$('#POAMapModal').on('show.bs.modal', function() {
   //Must wait until the render of the modal appear, thats why we use the resizeMap and NOT resizingMap!! ;-)
   resizeMapPoa();
})

$('#PelMapModal').on('show.bs.modal', function() {
   //Must wait until the render of the modal appear, thats why we use the resizeMap and NOT resizingMap!! ;-)
   resizeMapPel();
})

function resizeMapPoa() {
   if(typeof mapPoa =="undefined") return;
   setTimeout( function(){resizingMapPoa();} , 400);
}

function resizingMapPoa() {
   if(typeof mapPoa =="undefined") return;
   var center = mapPoa.getCenter();
   google.maps.event.trigger(mapPoa, "resize");
   mapPoa.setCenter(center); 
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
   var center = mapPel.getCenter();
   google.maps.event.trigger(mapPel, "resize");
   mapPel.setCenter(center); 
}