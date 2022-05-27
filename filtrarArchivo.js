const fs = require('fs');
const dirName = process.argv[2];
const texto = process.argv[3];

fs.readdir(dirName, function (err, data) {
    if (err) {
        console.log(err)
    }
    data.forEach(function(file){
        file.split('.')[1] === texto ? console.log(file) : null;
        });
    });