import GameSavingLoader from '../classes/GameSavingLoader';

jest.setTimeout = 5000;

test('load game saving', async () => {
  const saving = await GameSavingLoader.load();
  const result = { id: 9, created: 1546300800, userInfo: { id: 1, name: 'Hitman', level: 10, points: 2000 } };

  expect(saving).toEqual(result);
});
