const fs = require('fs');
const PATH = './files';

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
    fs.readdir(`${PATH}`, (err,res) => {
        if (err) throw err;
        console.log(res);
    });
}

const renameFile = (name, rename) => {
    fs.rename(`${PATH}/${name}`, `${PATH}/${rename}`, (err, res) => {
        if (err) throw err;
        console.log('File Renamed!');
    });
}

const copyFile = (fromName, toName) => {
    fs.copyFile(`${PATH}/${fromName}`, `${PATH}/${toName}`, (err) => {
        if (err) throw err;
        console.log(`${fromName} was copied to ${toName}`);
    });
}
const saveFile = (name, content) => {
    fs.appendFile(`${PATH}/${name}`, content, (err) => {
        if (err) throw err;
        console.log(`${name} saved!`);
    }); 
}

const deleteFile = (name) => {
    fs.unlink(`${PATH}/${name}`, (err) => {
        if (err) throw err;
        console.log('Delete!');
    });
}


module.exports = { readDir, renameFile, copyFile, saveFile, deleteFile };
