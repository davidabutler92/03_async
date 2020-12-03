const { copy } = require('./copyAFile');
const fs = require('fs').promises



describe('copy', () => {
  
  afterEach(() => {
    return fs.rm('./copy.txt');
  });

    it('should read a file then copy the text into another file', () => {
        return copy(`${__dirname}/sample.txt`, './copy.txt')
        .then(() => {
          return fs.readFile('./copy.txt', 'utf-8')
        })
        .then(res => {
          expect(res).toEqual('Hello World!');
        })
    });
});

  