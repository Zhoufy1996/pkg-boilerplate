import shell from 'shelljs';

console.log(shell.ls());
setInterval(() => {
    console.log(new Date().toUTCString());
}, 1000);
