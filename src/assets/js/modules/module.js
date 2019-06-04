module.exports = Module;


function Module() {
    'use strict';

    var method = {};

    method.init = function() {


      var list = {};
      $("body").find("input").each(function () {
        var field = $(this).attr('id');
        var value = $(this).val();
        list[field] = value;
      });
      console.log(list);

      function errorHandler(errorCodes) {
        // This should be handled in a way that is relevant to your payment pages
        console.log(errorCodes,'hello')
      }

      var encryptedData = Worldpay.encrypt(list, errorHandler);
      if (encryptedData) {
        document.getElementById('encryptedData').innerHTML = encryptedData;
      }
      
    };

    return method;
}
