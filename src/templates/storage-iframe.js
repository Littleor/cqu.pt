var CrossStorageHub = require('cross-storage').CrossStorageHub;
CrossStorageHub.init([
    { origin: /^(.*)host\.congm\.in$/, allow: ['get', 'set', 'del', 'getKeys', 'clear'] }
]);