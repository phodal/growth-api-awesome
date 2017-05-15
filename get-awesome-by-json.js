var fs = require('fs');
var _ = require('lodash');
var request = require('request');

var data = fs.readFileSync(__dirname + '/awesome-list.json', 'utf8');
var AwesomeList = JSON.parse(data);

_.each(AwesomeList, function (awesomeListByCategory) {
    _.each(awesomeListByCategory.childrens, function (awesome) {
        var baseUrl = 'https://raw.githubusercontent.com/' + awesome.github + '/master/';
        var url = baseUrl + 'README.md';
        var path = 'download/' + awesome.slug + '.md';

        request(url)
            .on('error', function (err) {
                // console.log(url, path);
            })
            .on('response', function (response) {
                if(response.statusCode !== 200) {
                    console.log(response.statusCode, path);
                }
                if(response.statusCode === 404){
                    request(baseUrl + 'readme.md')
                        .on('error', function (err) {
                            console.log(err, path)
                        })
                        .pipe(fs.createWriteStream(path))


                }
            })
            .pipe(fs.createWriteStream(path))
    });
});
