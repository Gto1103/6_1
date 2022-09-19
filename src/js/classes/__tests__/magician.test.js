import Magician from '../magician';

test('Correct create character Magician', () => {
  const received = new Magician('Максим');
  const expected = {
    name: 'Максим',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});
