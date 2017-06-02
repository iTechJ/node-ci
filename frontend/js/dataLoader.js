(function () {
    'use strict';

    fetch('http://localhost:3000').then(function(response) {
        return response.json();
    }).then(function (obj) {
        document.getElementById('server-response').innerText = obj.message;
    });
})();
