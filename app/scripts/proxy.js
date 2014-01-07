var initializeProxy = function() {

  var config = {
    mode: 'pac_script',
    pacScript: {
      data: "function FindProxyForURL(url, host) {\n" +
            "  var server = '" + localStorage["server"] + "';\n" +
            "  var port = '" + localStorage["port"] + "';\n" +

            "  if (host.toLowerCase() === 'www.youtube.com' || (/^.+\.googlevideo\.com$/).test(host)) {\n" +
            "    return 'PROXY ' + server + ':' + port;\n" +
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