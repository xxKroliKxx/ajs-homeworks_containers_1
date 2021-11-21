import Team from '../js/team';

test('add', () => {
  const t = new Team();
  t.add('тест');
  expect(t.members.has('тест')).toBe(true);
});

test('add 2', () => {
  const t = new Team();
  t.add('тест');
  expect(() => {
    t.add('тест');
  }).toThrow(new Error('element exists'));
});

test('add all', () => {
  const t = new Team();
  t.addAll('тест', 'тест1', 'тест');
  const members = [];
  for (const e of t.members) {
    members.push(e);
  }
  expect(members).toEqual(['тест', 'тест1']);
});

test('to array', () => {
  const t = new Team();
  t.addAll('тест', 'тест1', 'тест');
  expect(t.toArray()).toEqual(['тест', 'тест1']);
});
