const myModule = require('./myModule');

const dirName = process.argv[2];
const texto = process.argv[3];

myModule(dirName, texto, function(err, data) {
    if(err){console.log(err);
    }
    console.log(data)
})

