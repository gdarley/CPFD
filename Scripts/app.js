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
     function initialize() {
        var mapCanvas = document.getElementById('map-canvas');
        var mapCanvas2 = document.getElementById('map2-canvas');
        var mapOptions1 = {
          center: new google.maps.LatLng(44.5403, -78.5463),
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var mapOptions2 = {
          center: new google.maps.LatLng(44.5403, -78.5463),
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
        var map2 = new google.maps.Map(mapCanvas2, mapOptions2)
      }
      google.maps.event.addDomListener(window, 'load', initialize);
