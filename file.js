const fs = require('fs');                               

 //////////////////////////////////////////////Read a created file

fs.readFile('./docs/blog1.txt', (err,data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});                                                       


////////////////////////////////////////////////// Write/create a file


fs.writeFile('./docs/blog2.txt', 'New file is created', ()=>{
    console.log('New file added !!!');
})