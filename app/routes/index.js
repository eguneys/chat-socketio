var fs = require('fs');

exports.index = function(req, res) {

    fs.readFile('public/index.html', function(err, data) {
	if (err) throw err;
	res.writeHead(200);
	res.end(data);
    });
};
