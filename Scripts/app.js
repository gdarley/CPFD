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