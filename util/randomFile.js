const fs = require('node:fs');
const path = require("node:path");

function findFilesInDir(directory, recursive) {
    const allFiles = [];
    const files = fs.readdirSync(path.resolve(directory));
    for (const i in files) {
        const file = files[i];
        if (fs.statSync(path.resolve(directory, file)).isDirectory()) {
            if (recursive) {
                allFiles.push(...findFilesInDir(path.resolve(directory, file), true));
            }
        } else {
            allFiles.push(path.resolve(directory, file));
        }
    }
    return allFiles;
}

function randomFile(directory, recursive) {
    const files = findFilesInDir(directory, recursive);
    const randomIndex = Math.trunc(Math.random() * files.length);
    const file = files[randomIndex];
    return file;
}

module.exports = {
    randomFile,
    findFilesInDir
};
