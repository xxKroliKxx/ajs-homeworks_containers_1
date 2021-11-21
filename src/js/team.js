export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) throw new Error('element exists');
    this.members.add(character);
  }

  addAll(...character) {
    for (const e of character) {
      this.members.add(e);
    }
  }

  toArray() {
    return Array.from(this.members);
  }
}
