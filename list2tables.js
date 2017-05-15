var parser = require('mdast');
var fs = require('fs');
var _ = require( 'lodash' )

var raw = fs.readFileSync(__dirname + '/free-programming-books-zh_CN/README.md', 'utf8');
// var raw = fs.readFileSync(__dirname + '/demo.md', 'utf8');

var resultsInString = "";

function listToTable(list){
    var results = [];
    var listItems = list.children;
    _.each(listItems, item => {
        var baseChildren = item.children[0].children[0];
        if(baseChildren.children && baseChildren.children[0]) {
            var title = baseChildren.children[0].value;
            var href = baseChildren.href;

            if(/github\.com/.test(baseChildren.href)) {
                results.push({
                    title: title,
                    href: href,
                    type: 'github'
                });

                console.log(title + ' | ' +  href + ' | github ');
            } else if(/gitbook\.io/.test(baseChildren.href)) {
                results.push({
                    title: title,
                    href: href,
                    type: 'gitbook'
                });

                console.log(title + ' | ' +  href + ' | gitbook ');
            } else if(/^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/.test(baseChildren.href)) {
                results.push({
                    title: title,
                    href: href,
                    type: 'website'
                });

                if(title && href) {
                    console.log(title + ' | ' +  href + ' | website ');
                }
            }
        }
    });

    return results;
}

function getData(string) {
    var tokens = parser.parse(string)
    var results = [];
    var heading = '';

    _.forEach(tokens.children, function(token){
        if(token.type === 'heading') {
            heading = token.children[0].value
        }
        if(token.type === 'list') {
            console.log('\n' + heading + '\n---\n');
            console.log('title | href | type' );
            console.log('------|-----|--------');
            var result = listToTable(token, heading);
            if(!_.isEmpty(result)){
                results.push({
                    heading: heading,
                    childrens: result
                });
            }
        }
    })
    return results;
}

var result = getData(raw);
fs.writeFileSync('api.json', JSON.stringify(result, null, 4));
