const fs = require('fs');                               

 //////////////////////////////////////////////// Read a created file

fs.readFile('./docs/blog1.txt', (err,data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});                                                       


////////////////////////////////////////////////// Write/create a file

fs.writeFile('./docs/blog2.txt', 'New file is created', ()=>{
    console.log('file edited !!!');
})

fs.mkdir('./assets', (err)=>{
    if(err) {
        console.log(err);
    }
    console.log('Folder Created');
})

if(fs.existsSync('./deleteme.txt')){
    fs.unlink('./deleteme.txt',(err)=>{
        if(err){
            console.log(err);
        }
        console.log("file deleted");
    })
}


