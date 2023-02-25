const shell = require("shelljs");
const fs = require("fs");
const path = require("path");

(() => {

    var args = process.argv;

    console.log(path.join(args[2],"test"));
    fs.mkdirSync(path.join(args[2],"test"));

    if(shell.which("git")) {
        return;
    }
    if(!shell.which("winget")) {
        
    }
})();