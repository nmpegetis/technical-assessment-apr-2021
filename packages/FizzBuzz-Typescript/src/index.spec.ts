import { NumberListReplacer } from './helpers/numberlistreplacer';
import { FizzRule } from './rules/fizzrule';
import { BuzzRule } from './rules/buzzrule';
import { FizzBuzzRule } from './rules/fizzbuzzrule';

describe("FizzBuzz algorithm", () => {
  it("should return only Fizz in multiples of 3", () => {
    const fizBuzz = new NumberListReplacer();
    fizBuzz.addRule(new FizzRule());
    const output = fizBuzz.generate(15);
    const expected = ["1", "2", "Fizz", "4", "5", "Fizz", "7", "8", "Fizz", "10", "11", "Fizz", "13", "14", "Fizz"];
    expect(output).toEqual(expected);
  });

  it("should return Fizz in multiples of 3 and FizzBuzz in multiples of 3 and 5", () => {
    const fizBuzz = new NumberListReplacer();
    fizBuzz.addRule(new FizzBuzzRule());
    fizBuzz.addRule(new FizzRule());
    const output = fizBuzz.generate(15);
    const expected = ["1", "2", "Fizz", "4", "5", "Fizz", "7", "8", "Fizz", "10", "11", "Fizz", "13", "14", "FizzBuzz"];
    expect(output).toEqual(expected);
  });

  it("should return Fizz in multiples of 3, Buzz in multiples of 5 and FizzBuzz in multiples of 3 and 5", () => {
    const fizBuzz = new NumberListReplacer();
    fizBuzz.addRule(new FizzBuzzRule());
    fizBuzz.addRule(new FizzRule());
    fizBuzz.addRule(new BuzzRule());
    const output = fizBuzz.generate(15);
    const expected = ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"];
    expect(output).toEqual(expected);
  });

});