var delegator = {};

delegator.settings = {

  enabled: localStorage['enabled'] === 'true',
  proxies: [],

  load: function() {

    var empty = {
      proxies: [ { /* NOTHING */ } ]
    };

    var data =
      localStorage['proxies'] !== undefined
        ? JSON.parse(localStorage['proxies'])
        : empty;

    if (data.proxies.length === 0) {
      data.proxies = empty;
    }

    this.proxies = data.proxies;
  },

  save: function(proxies) {

    localStorage['proxies'] = JSON.stringify(proxies);
  }
};

delegator.settings.load();
