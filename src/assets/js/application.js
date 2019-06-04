// Vendor
global.jQuery = require('jquery');
global.$ = jQuery;

// Modules
var module = require('./modules/module')();

// Bootstrapping
$(function() {

    "use strict";

     module.init();

});