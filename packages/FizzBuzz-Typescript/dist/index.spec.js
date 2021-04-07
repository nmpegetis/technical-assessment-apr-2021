"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var numberlistreplacer_1 = require("./helpers/numberlistreplacer");
var fizzrule_1 = require("./rules/fizzrule");
var buzzrule_1 = require("./rules/buzzrule");
var fizzbuzzrule_1 = require("./rules/fizzbuzzrule");
describe("FizzBuzz algorithm", function () {
    it("should return only Fizz in multiples of 3", function () {
        var fizBuzz = new numberlistreplacer_1.NumberListReplacer();
        fizBuzz.addRule(new fizzrule_1.FizzRule());
        var output = fizBuzz.generate(15);
        var expected = ["1", "2", "Fizz", "4", "5", "Fizz", "7", "8", "Fizz", "10", "11", "Fizz", "13", "14", "Fizz"];
        expect(output).toEqual(expected);
    });
    it("should return Fizz in multiples of 3 and FizzBuzz in multiples of 3 and 5", function () {
        var fizBuzz = new numberlistreplacer_1.NumberListReplacer();
        fizBuzz.addRule(new fizzbuzzrule_1.FizzBuzzRule());
        fizBuzz.addRule(new fizzrule_1.FizzRule());
        var output = fizBuzz.generate(15);
        var expected = ["1", "2", "Fizz", "4", "5", "Fizz", "7", "8", "Fizz", "10", "11", "Fizz", "13", "14", "FizzBuzz"];
        expect(output).toEqual(expected);
    });
    it("should return Fizz in multiples of 3, Buzz in multiples of 5 and FizzBuzz in multiples of 3 and 5", function () {
        var fizBuzz = new numberlistreplacer_1.NumberListReplacer();
        fizBuzz.addRule(new fizzbuzzrule_1.FizzBuzzRule());
        fizBuzz.addRule(new fizzrule_1.FizzRule());
        fizBuzz.addRule(new buzzrule_1.BuzzRule());
        var output = fizBuzz.generate(15);
        var expected = ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"];
        expect(output).toEqual(expected);
    });
});
//# sourceMappingURL=index.spec.js.map