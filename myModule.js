const fs = require('fs');

module.exports = function (dirName, texto, callback) {
    fs.readdir(dirName, function(err, data) {
    if (err) {
        return callback(err)
    }
    const result = [];
    data.forEach(function(file){
        file.split('.')[1] === texto ? result.push(file) : null;
        });
        callback(null, result)
});
};

