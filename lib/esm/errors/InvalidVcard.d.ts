declare class InvalidVcard extends Error {
  readonly name: string;
  constructor(message: string);
}

export { InvalidVcard };
