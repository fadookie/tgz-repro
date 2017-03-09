const targz = require('tar.gz2');

targz().extract('data2.tar.gz', 'data')
    .then(console.log('extract finished!!'))
    .catch((err) => console.error('error callback fired: ', err));

console.log('done?');
