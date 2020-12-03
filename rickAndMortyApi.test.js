const { 
    getCharacter,
    getManyCharacters
} = require('./rickAndMortyApi');
const fetch = require('node-fetch');

// jest.mock('node-fetch');

// describe('getCharacter', () => {
//     it('should return a character when given an id', async () => {
//         fetch.mockResolvedValue({
//             json: () => Promise.resolve({
//                 "name": "Rick Sanchez",
//                 "status": "Alive",
//                 "species": "Human",
//             })
//         })
//         const res = await getCharacter(1)
//         expect(res).toEqual({
//             name: 'Rick Sanchez',
//             status: 'Alive',
//             species: 'Human'
//         })
//     })
// });




describe('returns many rick&Morty characters uses promise.all', () => {
    it('fetches many characters from the api', async() => {
      const characters = await getManyCharacters([1, 2, 3]);
  
      expect(characters).toEqual([
        { name: 'Rick Sanchez', species: 'Human', status: 'Alive' },
        { name: 'Morty Smith', species: 'Human', status: 'Alive' },
        { name: 'Summer Smith', species: 'Human', status: 'Alive' }
      ]);
    });
  });



