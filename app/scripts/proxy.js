'use strict';

delegator.proxy = {
  initialize: function() {
    var config = {
      mode: 'pac_script',
      pacScript: {
        data: delegator.builder.generatePacScript()
      }
    };

    chrome.proxy.settings.set({
      value: config,
      scope: 'regular'
    });
  }
};

delegator.proxy.initialize();
