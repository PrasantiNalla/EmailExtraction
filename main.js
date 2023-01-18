
import { readFileSync } from "fs";
const contents = readFileSync("test.txt", { encoding: "utf-8" });
let emailCounter = 0;
let softwireEmailcounter = 0;

emailCounter = contents.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
console.log("Total No.of Emails in the file  :" + emailCounter.length);


for (let i = 0; i < contents.length; i++) {

    if (((contents.substring(i, i + 14) === '@softwire.com ') || contents.substring(i, i + 15) === '@softwire.com\r\n')) {

        softwireEmailcounter++;
    }
}
console.log("Total No.of Softwire Emails in the file  :" + softwireEmailcounter);