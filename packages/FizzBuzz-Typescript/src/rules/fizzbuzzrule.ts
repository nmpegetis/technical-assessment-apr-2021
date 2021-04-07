import { RuleInterface } from './rule.model'

export class FizzBuzzRule implements RuleInterface {
  matches(number: number): boolean {
    return number % 3 === 0 && number % 5 === 0;
  }

  getReplacement(): string {
    return "FizzBuzz";
  }
}