const { 
    getCharacter,
    getManyCharacters
} = require('./rickAndMortyApi');
const fetch = require('node-fetch');

jest.mock('node-fetch');

describe('getCharacter', () => {
    it('should return a character when given an id', async () => {
        fetch.mockResolvedValue({
            json: () => Promise.resolve({
                "name": "Rick Sanchez",
                "status": "Alive",
                "species": "Human",
            })
        })
        const res = await getCharacter(1)
        expect(res).toEqual({
            name: 'Rick Sanchez',
            status: 'Alive',
            species: 'Human'
        })
    })
});




describe('getManyCharacters', () => {
    it('should return a character when given an id', async () => {
        const res = await getCharacter(1)
        expect(res).toEqual({
            name: 'Rick Sanchez',
            status: 'Alive',
            species: 'Human'
        })
    })
});



