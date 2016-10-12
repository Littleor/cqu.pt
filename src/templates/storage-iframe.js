var CrossStorageHub = require('cross-storage').CrossStorageHub;
CrossStorageHub.init([
    { origin: /^(.*)host\.congm\.in\:88$/, allow: ['get', 'set', 'del', 'getKeys', 'clear'] },
    { origin: /^(.*)cqupt\.congm\.in$/, allow: ['get', 'set', 'del', 'getKeys', 'clear'] }
]);