let text = "my name is aghna";
let text1="i am from attock";
let text2="          cat is pretty!          ";
//checking the length of the text 
let length=text.length;
console.log(length);
//spliting the text
let slice=text.slice(3,8);
console.log(slice);
//substring the text
let substring=text.substring(10,16);
console.log(substring);
//substr the text 
let str=text.substr(7);
console.log(str);
//replace the text
let newtext=text.replace("aghna","ravia")
console.log(newtext);
//replaceall the text1
let replaceall=text1.replaceAll("attock","islamabad");
console.log(replaceall);
//to upper case the text1
let uppercase=text1.toUpperCase();
console.log(uppercase);
//to lower case the text1
let lowercase=text1.toLowerCase();
console.log(lowercase);
// concat the text
let concat=text.concat("rasool");
console.log(concat);
// trim the text
let trim =text.trim();
console.log(trim);
// trimStart the text2
let trimStart=text2.trimStart();
console.log(trimStart);
// trimEnd the text1
let trimEnd=text1.trimEnd();
console.log(trimEnd);
// PadStart the text
let padded=text.padStart(4,"x");
console.log(padded);
// padend the text1
let padend=text1.padEnd(4,"x");
console.log(padend);
// charAt the text1
let char= text1.charAt(0);
console.log(char);
// charcodeAt the text2
let charcodeAt=text2.charCodeAt(0);
console.log(charcodeAt);
//split the text
let split=text.split(" ");
console.log(split);
