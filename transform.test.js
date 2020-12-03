const { transform, reverseToUpper, removeCaps } = require('./transform');
const fs = require('fs').promises



describe('transform', () => {
    // it('should reverse a string', () => {
    //     const result = reverseToUpper('hello');
    //     expect(result).toEqual('OLLEH');
    // })

    // it('should remove capital letters', () => {
    //     const result = removeCaps('Hello');
    //     expect(result).toEqual('ello');
    // })
    //should remove capital letters, make all letters capital then reverse the string
    
    beforeAll(() => {
        return Promise.all([
            fs.writeFile('./transform.txt', 'Hello')
        ]);
    });

    it('should remove capital letters, make all letters capital then reverse the string', () => {
        return transform('./transform.txt')
            .then(() => {
                return fs.readFile('./transform.txt', 'utf-8')
            })
            .then(res => {
                expect(res).toEqual('OLLE');
            })
    });
});