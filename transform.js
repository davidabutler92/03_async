const fsPromises = require('fs').promises;

const reverseToUpper = str => {
    return str.split("").reverse().join("").toUpperCase();
}

const removeCaps = str => {
    return str.replace( /[^a-z]/g, '' );
}

function transform(src) {
    return fsPromises.readFile(src, 'utf-8')
    .then(res => {
        return removeCaps(res);
    })
    .then(res => {
        return reverseToUpper(res);
    })
    .then(res => {
        return fsPromises.writeFile(src, res, 'utf-8');
    })
};

module.exports = {
    transform,
    reverseToUpper,
    removeCaps
}