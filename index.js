const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    //res.statusCode = 200;
    //res.setHeader('Content-Type', 'text/plain');
    try {
        axios.get('https://api.github.com/repos/nodejs/node').then(function(response){
            res.statusCode = 200;
            res.end(`Stargazers: ${msg.stargazers_count}\n Forks: ${msg.forks_count}\n Open Issues: ${msg.open_issues_count}`);
        });
    } catch(error){
        res.statusCode=500;
        res.end('Internet error issued.');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});