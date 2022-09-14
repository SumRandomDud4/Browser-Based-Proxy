const http = require("http")
var fs = require('fs');
const url = require("url");
const axios = require('axios');

css = "* {background-color: #00030f;color: white;} a{color:#ccc;}a:link{color:#ccc;} h3 {color: white}"

domain = "";

const port = 24425;



async function httpGetAsync(theUrl, callback) {

    console.log(theUrl);
    const res = await axios.get(theUrl).then(function (response) {
        callback(response);
    });
}

function validateRequest (req) {
    //if (req.length>256) {
    //    return 1;
    //}
    //if ((req[0] != "/" || checkStatement (req) )) {
    //    return 1;
    //} else {
    //    return 0;
    //}
    return 0;
}

function checkRequest(req) {
    //let headers = req.headers;
    //
    //if (headers['sec-fetch-site'] != "same-origin") {
    //    return 1;
    //}
    return 0;
}

http.createServer((req, res)=>{
    

    let path = req.url;

    let parameters = url.parse(path, true).query;

    search = parameters.q;

    searchType = parameters.searchType;

    console.log(path);



    if (search != undefined) {

        if (searchType == "tor") {

        } else if (searchType == "normal") {

        } else {
            responseData = `${httpGetAsync(`https://www.ask.com/web?q=${search}&ad=dirN&o=0&ueid=90d5946d-cfd2-4228-9f42-7fad873b8488`, (function(response){
                console.log(response.data)
                res.write(`${response.data}<style>${css}</style>`);
                res.end();
            }))}`;
        }

        return 0;
    }

    if (validateRequest (path) == 0) {
        path = req.url.substring(1);
        if (path == "") {
            res.writeHead(200, {
                //'Content-Security-Policy': "default-src 'self';"
            });
            fs.createReadStream('public/main.html').pipe(res);
        } else if (path == "key") {
            res.writeHead(200, {
                //'Content-Security-Policy': "default-src 'self';"
            });
            res.write(`${crypt}`);
            res.end();
        } else {
            if (checkRequest(req)) {
                res.writeHead(302, {
                    location: domain,
                  });
                res.end();
                return;
            } else {
                if (path == "search") {
                    res.writeHead(200);
                    fs.createReadStream("public/search.html").pipe(res);
                } else if (path == "ASDFMNaBweNGterhhgjsgHGFsjsgfGSFHasThhastfhhAAkiPOaVBNSRG") { 
                    res.writeHead(200);
                    fs.createReadStream("public/index.html").pipe(res);
                } else if (fs.existsSync(path) && path.startsWith("public")) {
                    res.writeHead(200);
                    fs.createReadStream(path).pipe(res);
                } else {
                    res.writeHead(404);
                    res.end();
                }
            }
        } 
    } else {
        res.writeHead(302, {
            location: domain,
          });
        res.end();
        return;
    }
}).listen(port);