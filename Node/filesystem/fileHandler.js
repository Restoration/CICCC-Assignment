const fs = require('fs');

/*
 * list files in a folder
 * rename a file
 * move a file
 * copy a file
 * delete a file
 * opena a file and show its output screen
 * take some text, overwrite a file with it, or append it to a file
 *
 * */


const readDir = () => {
    fs.readdir('./files/', (err,res) => {
        if (err) throw err;
        console.log(res);
    });
}

const renameFile = () => {
    fs.rename('mynewfile1.txt', 'myrenamedfile.txt', (err, res) => {
        if (err) throw err;
        console.log('File Renamed!');
    });
}

const copyFile = () => {
    fs.copyFile('source.txt', 'destination.txt', (err) => {
        if (err) throw err;
        console.log('source.txt was copied to destination.txt');
    });
}
const saveFile = () => {
    fs.appendFile('./files/mynewfile1.txt', 'Hello content!', (err) => {
        if (err) throw err;
        return true;
    }); 
}

const deleteFile = () => {
    fs.unlink('./files/mynewfile1.txt', (err) => {
        if (err) throw err;
        console.log('Delete!');
    });
}


module.exports = { readDir, renameFile, copyFile, saveFile, deleteFile };
