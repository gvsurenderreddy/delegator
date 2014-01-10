'use strict';

delegator.integration = function() {
  
  var setBadge = function(enabled) {
    
    chrome.browserAction.setTitle({
      title: enabled ? 'Disable Delegator' : 'Enable Delegator'
    });

    chrome.browserAction.setBadgeText({
      text: enabled ? '1' : '0'
    });

    chrome.browserAction.setBadgeBackgroundColor({
      color: enabled ? '#00FF00' : '#FF0000'
    });
  };

  this.initialize = function() {

    chrome.browserAction.onClicked.addListener(function() {
      var newStatus = !delegator.settings.enabled;

      localStorage['enabled'] = newStatus;

      proxy.update();
      
      this.setBadge(newStatus);
    });

    // Set initial badge
    setBadge(delegator.settings.enabled);
  };
};

var integration = new delegator.integration();
integration.initialize();