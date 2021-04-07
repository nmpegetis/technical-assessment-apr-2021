export interface RuleInterface {
  [x: string]: any;
  matches(number: number): boolean;
  getReplacement(): string;
}