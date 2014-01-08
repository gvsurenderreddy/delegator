var delegator = {};

delegator.options = {
  enabled: false,
  server: '',
  port: 0,
  initialize: function() {
    delegator.options.enabled = localStorage['enabled'] === 'true';
    delegator.options.server = localStorage['server'];
    delegator.options.port = localStorage['port'];
  }
};

delegator.options.initialize();

var setActionBadge = function() {
  chrome.browserAction.setTitle({
    title: delegator.options.enabled ? 'Disable Delegator' : 'Enable Delegator'
  });

  chrome.browserAction.setBadgeText({
    text: delegator.options.enabled ? '1' : '0'
  });

  chrome.browserAction.setBadgeBackgroundColor({
    color: delegator.options.enabled ? '#00FF00' : '#FF0000'
  });
};

setActionBadge();

chrome.browserAction.onClicked.addListener(function() {
  localStorage['enabled'] = !delegator.options.enabled;
  delegator.options.initialize();
  setActionBadge();
});
