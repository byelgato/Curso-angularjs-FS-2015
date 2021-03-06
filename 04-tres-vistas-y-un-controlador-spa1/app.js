// Vemos como usar una dependencia de otro módulo
// En este caso el módulo es 'ngRoute' 
// Que viene en el fichrero angular-route
angular.module('controlCajaApp', ['ngRoute']);

// Además de controladores, un módulo puede tener funciones de configuración
// Estas se ejecutarán al arrancar la aplicación
function configurarRutas($routeProvider) {
    // Declaramos una dependencia en el parámetro $routeProvider
    // Este servicio nos provee de métodos para realizar un enrutado en el cliente
    // Con esto se crean las SPA
    $routeProvider
        .when('/', {
            // Para cada ruta se declara la vista y el controlador asociados
            controller: 'CajaCtrl',
            controllerAs: 'caja',
            templateUrl: 'total.html'
        })
        .when('/nuevo', {
            controller: 'CajaCtrl',
            controllerAs: 'caja',
            templateUrl: 'nuevo.html'
        })
        .when('/lista', {
            controller: 'CajaCtrl',
            controllerAs: 'caja',
            templateUrl: 'lista.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}

angular.module('controlCajaApp').config(configurarRutas);