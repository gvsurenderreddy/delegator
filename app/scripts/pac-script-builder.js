'use strict';

delegator.builder = {
  generatePacScript: function() {
    delegator.settings.load();

    var proxies = delegator.settings.proxies;
    var server = proxies[0].server;
    var port = proxies[0].port;

    var proxy = 'DIRECT';

    if (typeof server !== 'undefined' && typeof port !== 'undefined') {
      proxy = 'PROXY ' + server + ':' + port;
    }

    if (!delegator.settings.enabled) {
      proxy = 'DIRECT';
    }

    var pacScript =
      'function FindProxyForURL(url, host) {\n';

    for (var i = 0; i < delegator.services.length; i++) {
      var service = delegator.services[i];

      pacScript +=
        '  if (' + service.conditions.join(' || ') + ') {\n' +
        '    return "' + proxy + '";\n' +
        '  }\n\n';
    }

    pacScript +=
      '  return "DIRECT";\n' +
      '}';

    return pacScript;
  }
};
