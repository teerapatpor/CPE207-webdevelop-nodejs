const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req,res)=>{
    var str = req.url.toString();
    var photo = req.url.substring(8,str.length);
    var jas = req.url.substring(11,str.length);
    var urlphototype = req.url.substring(str.length-3,str.length);
    var urljastype = req.url.substring(str.length-2,str.length);
    console.log(req.url);
    if(req.url ==='/'){
        fs.readFile(path.join(__dirname,'index.html'),(err,content)=>{
            if(err)throw err;
            res.writeHead(200, {'content-type': 'text/html' });
            res.end(content);
        });
    }else if(req.url === '/gallery1'){
        fs.readFile(path.join(__dirname,'gallery1.html'),(err,content)=>{
            if(err)throw err;
            res.writeHead(200, {'content-type': 'text/html' });
            res.end(content);
        });
    }else if(req.url === '/gallery2'){
        fs.readFile(path.join(__dirname,'gallery2.html'),(err,content)=>{
            if(err)throw err;
            res.writeHead(200, {'content-type': 'text/html' });
            res.end(content);
        });
    }else if(req.url === '/contact'){
        fs.readFile(path.join(__dirname,'contact.html'),(err,content)=>{
            if(err)throw err;
            res.writeHead(200, {'content-type': 'text/html' });
            res.end(content);
        });
    }else if(req.url === '/generic'){
        fs.readFile(path.join(__dirname,'generic.html'),(err,content)=>{
            if(err)throw err;
            res.writeHead(200, {'content-type': 'text/html' });
            res.end(content);
        });
    }else if(req.url==='/assets/css/main.css'){
        fs.readFile(path.join(__dirname,'assets','css','main.css'),(err,content)=>{
            if(err)throw err;
            res.writeHead(200, {'content-type': 'text/css' });
            res.end(content);
        });
    }else if(req.url==='/assets/js/'+jas){
        fs.readFile(path.join(__dirname,'assets','js',jas),(err,content)=>{
            if(err)throw err;
            res.writeHead(200, {'content-type': 'text/javascript' });
            res.end(content);
        });
    }else if(req.url==='/images/'+photo){
        fs.readFile(path.join(__dirname,'images',photo),(err,content)=>{
            if(err)throw err;
            res.writeHead(200, {'content-type': 'image/'+urlphototype });
            res.end(content);
        });
    }else{
        fs.readFile(path.join(__dirname,'404.html'),(err,content)=>{
            if(err)throw err;
            res.writeHead(404, {'content-type': 'text/html' });
            res.end(content);
        });
    }
});
const PORT = process.env.PORT || 5500;
server.listen(PORT, ()=>{
    console.log('Server is running on port: '+PORT);
})

