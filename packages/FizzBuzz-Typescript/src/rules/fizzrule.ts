import { RuleInterface } from './rule.model'

export class FizzRule implements RuleInterface {
  matches(number: number): boolean {
    return number % 3 === 0;
  }

  getReplacement(): string {
    return "Fizz";
  }
}
