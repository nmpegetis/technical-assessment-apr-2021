import { RuleInterface } from './rule.model'

export class BuzzRule implements RuleInterface {
  matches(number: number): boolean {
    return number % 5 === 0;
  }

  getReplacement(): string {
    return "Buzz";
  }
}