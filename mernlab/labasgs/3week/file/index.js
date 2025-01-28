const fs = require('fs');
const filePath = 'input.txt';

function readFile() {
    if (fs.existsSync(filePath)) {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
            }
        });
    } else {
        console.log('File does not exist.');
    }
}

function writeFile() {
    const content = "console.log(This is content after writing file)";
    fs.writeFile(filePath, content, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("File written successfully");
        }
    });
}

function appendFile() {
    const content = "This is content after appending to the file";
    fs.appendFile(filePath, content, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("File content appended successfully");
        }
    });
}

function deleteFile() {
    if (fs.existsSync(filePath)) {
        fs.unlink(filePath, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("File deleted successfully");
            }
        });
    } else {
        console.log('File does not exist to delete.');
    }
}
readFile();
writeFile();
appendFile();
// deleteFile();