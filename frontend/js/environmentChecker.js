(function () {
    'use strict';

    var configs = window.nodeCiConfigs;

    var env;
    if (configs && ['dev', 'staging', 'prod'].indexOf(configs.environment) !== -1) {
        env = configs.environment;
    } else {
        env = 'unknown';
    }
    document.getElementById('environment').innerText = env;
})();
