var initializeProxy = function() {

  // TODO: Get rid of config.pacScript.data... :/

  var config = {
    mode: 'pac_script',
    pacScript: {
      data: "function FindProxyForURL(url, host) {\n" +
            "  var services = [\n" +
            "    {\n" +
            "      name: 'YouTube',\n" +
            "      condition: function(host) {\n" +
            "        return host === 'www.youtube.com' || (/^.+\.googlevideo\.com$/).test(host);\n" +
            "      }\n" +
            "    }\n" +
            "  ];\n" +

            "  var server = '" + localStorage["server"] + "';\n" +
            "  var port = '" + localStorage["port"] + "';\n" +

            "  for (var i = 0; i <= services.length; i++) {\n" +
            "    var service = services[i];\n" +
            "    if (service.condition(host.toLowerCase())) {\n" +
            "      return 'PROXY ' + server + ':' + port;\n" +
            "    }\n" +
            "  }\n" +

            "  return 'DIRECT';\n" +
            "}\n"
    }
  };

  chrome.proxy.settings.set({
    value: config,
    scope: 'regular'
  });
};

initializeProxy();
