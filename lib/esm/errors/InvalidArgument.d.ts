declare class InvalidArgument extends Error {
  readonly name: string;
  constructor(message: string);
}

export { InvalidArgument };
