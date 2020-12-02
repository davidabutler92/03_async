const fsPromises = require('fs').promises;

const sample = './newSample.txt'; 

fsPromises.readFile('./sample.txt', 'utf-8')
.then(res => {
    return fsPromises.writeFile(sample, res, 'utf-8')
})
.then(() => {
    return fsPromises.readFile(sample, 'utf-8')
})
.then(res => {
    return console.log(res);
}) 






