var CrossStorageHub = require('cross-storage').CrossStorageHub;
CrossStorageHub.init([
    { origin: /^(.*)cqupt\.congm\.in$/, allow: ['get', 'set', 'del', 'getKeys', 'clear'] }
]);