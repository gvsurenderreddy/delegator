'use strict';

delegator.services = [
  {
    name: 'YouTube',
    conditions: [
      'host === "www.youtube.com"',
      '(/^.+\.googlevideo\.com$/).test(host)'
    ]
  }
];