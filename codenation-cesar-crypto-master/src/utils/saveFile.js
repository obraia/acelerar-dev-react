const fs = require('fs');

function saveFile(json, path, fileName) {
    fs.mkdir(path, { recursive: true }, () => { });
    fs.writeFile(path + fileName, JSON.stringify(json), () => { });
}

module.exports = saveFile;