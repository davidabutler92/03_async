const fsPromises = require('fs').promises;

function copy(src, dst) {
    return fsPromises.readFile(src, 'utf-8')
    .then(res => {
        return fsPromises.writeFile(dst, res, 'utf-8')
    })
};

module.exports = {
    copy
}


/*
copyFile = (src, dst) => {
    try {
        fsPromise.readFile(src, 'utf-8')
            .then(res => {
                return fsPromise.writeFile(dst, res, 'utf-8')
            })
        return fsPromise.readFile(dst, 'utf-8')
    } catch (err) {
        console.lot(err)
    }
}

module.exports = {
    copyFile
}*/