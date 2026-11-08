//לאון מברין ודניאל ברששת

console.log(__dirname, __filename);
const  fs = require('fs');
const path = require('path');
const filenames = ['a1.txt', 'a2.txt', 'a3.txt']; // Add more filenames as needed
const dirPath = path.join(__dirname, '/input');
let res='';
for(let i = 0; i < filenames.length; i++) {
  const filename = filenames[i];
  const textIn =fs.readFileSync(`${dirPath}/${filename}`, 'utf-8');
  const arr = textIn.split('\r\n')
  for(let j = 0; j < i+1 && j < arr.length; j++) {
    res += arr[j].split(' ')+'\r\n';
  }
}
fs.writeFileSync(`${__dirname}/result.txt`, res);
// console.table(arr);
