"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var numberlistreplacer_1 = require("./helpers/numberlistreplacer");
var fizzrule_1 = require("./rules/fizzrule");
var buzzrule_1 = require("./rules/buzzrule");
var fizzbuzzrule_1 = require("./rules/fizzbuzzrule");
var fizBuzz = new numberlistreplacer_1.NumberListReplacer();
fizBuzz.addRule(new fizzbuzzrule_1.FizzBuzzRule());
fizBuzz.addRule(new fizzrule_1.FizzRule());
fizBuzz.addRule(new buzzrule_1.BuzzRule());
var result = fizBuzz.generate(100);
console.log(result.join(", "));
//# sourceMappingURL=index.js.map