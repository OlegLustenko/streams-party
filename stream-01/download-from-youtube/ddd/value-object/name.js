export class Name {
  constructor(fullName) {
    const {first, last, fathers, nickname} = fullName;

    this.first = first;
    this.last = last;
    this.fathers = fathers;
    this.nickname = nickname;
  }
}
