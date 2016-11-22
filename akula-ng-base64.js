'use strict';
angular.module('akula-ng-base64', [])
    .provider('akNgBase64', akNgBase64Provider);

    function akNgBase64Provider() {
        this.$get = function($q) {
            var service = {};

            service.convert = function(url, outputFormat) {
                return $q(function(resolve, reject) {
                    var img = new Image();
                    img.crossOrigin = 'Anonymous';
                    img.onload = function(){
                        var canvas = document.createElement('CANVAS'),
                        ctx = canvas.getContext('2d'), dataURL;
                        canvas.height = this.height;
                        canvas.width = this.width;
                        ctx.drawImage(this, 0, 0);
                        dataURL = canvas.toDataURL(outputFormat);
                        resolve(dataURL);
                        canvas = null; 
                    };
                    img.src = url;
                });
            }

            return service;
        }
        this.$get.$inject = ['$q'];
    }