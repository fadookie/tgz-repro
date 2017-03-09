const targz = require('tar.gz2');
targz().extract('migration_12540.tar.gz', 'data')
    .then(console.log('extract finished!!'))
    .catch((err) => console.error(err));

console.log('done?');
