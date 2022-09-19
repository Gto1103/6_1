import Undead from '../undead';

test('Correct create character Undead', () => {
  const received = new Undead('Potap');
  const expected = {
    name: 'Potap',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});
