import Team from '../js/team';

test('add', () => {
  const t = new Team();
  t.add('тест');
  expect(t.members.has('тест')).toBe(true);
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
