const targz = require('tar.gz2');

targz().extract(process.argv[2], 'data')
    .then(console.log('extract finished!!'))
    .catch((err) => {
        console.error('error callback fired: ', err)
        process.exit(1);
    });

console.log('done?');
