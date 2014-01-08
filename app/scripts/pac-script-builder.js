'use strict';

delegator.builder = {
  generatePacScript: function() {
    var server = localStorage['server'];
    var port = localStorage['port'];

    var proxy = 'DIRECT';

    if (typeof server !== 'undefined' && typeof port !== 'undefined') {
      proxy = 'PROXY ' + server + ':' + port;
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