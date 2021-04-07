import { FizzBuzzRule } from "./fizzbuzzrule";

describe("FizzBuzz number", () => {
  it("should return false with number 1", () => {
    const fizzBuzzRule = new FizzBuzzRule();
    const output = fizzBuzzRule.matches(1);
    expect(output).toBe(false);
  });

  it("should return true with number 15", () => {
    const fizzBuzzRule = new FizzBuzzRule();
    const output = fizzBuzzRule.matches(15);
    expect(output).toBe(true);
  });

  it("should return FizzBuzz", () => {
    const fizzBuzzRule = new FizzBuzzRule();
    const output = fizzBuzzRule.getReplacement();
    expect(output).toBe("FizzBuzz");
  });

});