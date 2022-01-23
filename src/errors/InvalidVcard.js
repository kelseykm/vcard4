export class InvalidVcard extends Error {
  constructor(message) {
    super(message);
    this.name = 'InvalidVcard';
  }
}

Object.freeze(InvalidVcard);
