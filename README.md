# Repro case for node-tar.gz lib bug

Issue: https://github.com/alanhoff/node-tar.gz/issues/44

## Running the repro case
Optional: `nvm use` (I tested this on node v6.9.4). Then:

```
npm install && npm test
```

Expected: Promise only resolves when extract operation is complete, or rejects on error.

Actual: Promise resolves, then error callback fires (because it's a `tar.bz2` file):

```
$ npm test

> tgz-repro@0.0.0 test /Users/eliot/Dev/pear/tgz-repro
> node test.js 'data.tar.bz2'

extract finished!!
done?
error callback fired:  { Error: incorrect header check
    at Zlib._handle.onerror (zlib.js:370:17)
  cause:
   { Error: incorrect header check
       at Zlib._handle.onerror (zlib.js:370:17) errno: -3, code: 'Z_DATA_ERROR' },
  isOperational: true,
  errno: -3,
  code: 'Z_DATA_ERROR' }
```

## Additional repro case

```
npm run test-permission
```

This can be used to reproduce a permissions error when an archive operation would otherwise overwrite a file.