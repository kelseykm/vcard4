import { InvalidVcard } from "../../src/errors/index.js";
import { expect } from "chai";

describe("MissingArgument tests", () => {
  it("Should work as expected", () => {
    expect(() => {
      throw new InvalidVcard("Testing...");
    }).to.throw(InvalidVcard, "Testing...");
  });
});
