import { NumberListReplacer } from './helpers/numberlistreplacer';
import { FizzRule } from './rules/fizzrule';
import { BuzzRule } from './rules/buzzrule';
import { FizzBuzzRule } from './rules/fizzbuzzrule';

const fizBuzz = new NumberListReplacer();
fizBuzz.addRule(new FizzBuzzRule());
fizBuzz.addRule(new FizzRule());
fizBuzz.addRule(new BuzzRule());
const result = fizBuzz.generate(100);

console.log(result.join(", "));