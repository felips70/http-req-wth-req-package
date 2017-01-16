var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
        console.log('Downloadgin image...');
         console.log('Response Status Message: ', response.statusMessage);
         console.log(response.headers['content-type']);
         console.log('Download complete.');
       })
       .pipe(fs.createWriteStream('./future.jpg'));
