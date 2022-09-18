const fs = require('fs');
const http = require('http');
const url = require('url');
const port = 24425;

// Create an HTTP server
const server = http.createServer((req, res) => {

    let path = req.url.substring(1);

    if (req.length > 1024 || path.includes("%2e")) {
        res.end();
        return;
    }

    console.log(path);

    if (path == "") { // Render main page
        fs.readFile('public/index.html', null, function (error, data) {
            if (error) {
                res.writeHead(404);
                res.write('File not found');
            } else {
                res.write(data);
            }
            res.end();
        });
    } else if (path == "favicon.ico") { // Render Favicon
        fs.readFile('public/images/favicon.png', null, function (error, data) {
            if (error) {
                res.writeHead(404);
                res.write('File not found');
            } else {
                res.write(data);
            }
            res.end();
        });
    } else {
        if (path.startsWith("public/") && fs.existsSync(path)) { // Send all other pages
            fs.readFile(path, null, function (error, data) {
                if (error) {
                    res.writeHead(404);
                    res.write('File not found');
                } else {
                    res.write(data);
                }
                res.end();
            });
        } else {
            res.writeHead(404);
            res.write('File not found');
            res.end();
        };
    };
});

server.listen(port);
console.log(`Server listening on port ${port}`);
