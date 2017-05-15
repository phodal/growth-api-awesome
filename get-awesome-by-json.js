var fs = require('fs');
var _ = require('lodash');
var request = require('request');

var data = fs.readFileSync(__dirname + '/awesome-list.json', 'utf8');
var AwesomeList = JSON.parse(data);

_.each(AwesomeList, function(awesomeListByCategory){
    _.each(awesomeListByCategory.childrens, function(awesome){
        var url = 'https://raw.githubusercontent.com/' + awesome.github + '/master/README.md';
        var path = 'download/' + awesome.slug + '.md';

        console.log(url, path);
        request(url).pipe(fs.createWriteStream(path))
    });
});