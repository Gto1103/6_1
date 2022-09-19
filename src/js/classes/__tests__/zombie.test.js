import Zombie from '../zombie';

test('Correct create character Zombie', () => {
  const received = new Zombie('Ooooo');
  const expected = {
    name: 'Ooooo',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});
