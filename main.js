import fs from "fs";


//const fs = require('fs')
/*const data = fs.readFile("test.txt",(err, inputD) => {
   if (err) throw err;
   console.log(inputD.toString());
})*/
//console.log(data.toString());
/*import { readFileSync } from "fs";

const rawContents = readFileSync("test.txt");
const contents = rawContents.toString();*/

import { readFileSync } from "fs";

const contents = readFileSync("test.txt", { encoding: "utf-8" });

let emailCounter = 0;

//emailCounter = contents.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
//console.log(emailCounter.length);
//let softwireEmailCounter = 0;
/*softwireEmailCounter = contents.match("@softwire.com");
console.log(softwireEmailCounter.length);*/
let counter = 0;
for (let i = 0; i < contents.length; i++) {

    if (((contents.substring(i, i + 14) === '@softwire.com ') || contents.substring(i, i + 15) === '@softwire.com\r\n')) {

        counter++;
    }
}
console.log(counter);