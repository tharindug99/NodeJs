const http = require('http');

const server = http.createServer((req, res) =>{
    console.log('request made')
    console.log(req.url, req.method);

    ///set header content type
 res.setHeader('Content-Type','text/html');

//  res.write('<p>Hello Again !!</p>');
//  res.write('<p>Hello Again !!</p>');
//  res.end();

let path ='./views/';
switch (req.url) {
    case value:
        
        break;

    default:
        break;
}


});


server.listen(3000, 'localhost', ()=>{
    console.log('Listening on port 3000');
})