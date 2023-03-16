
export interface ValidationRule {
    (value: string): string | '';
  }

export function validateInput(value: string, rules: ValidationRule[]): string | undefined {
    for (const rule of rules) {
      const error = rule(value);
      if (error) {
        return error;
      }
    }
  }

export function min (minLength: number): ValidationRule {
    return (value: string) => value && value.length < minLength ? `Error! 최소 ${minLength}글자 이상이여야 합니다` : '';
}

export function max (maxLength: number): ValidationRule {
    return (value: string) => value && value.length > maxLength ? `Error! 최대 ${maxLength}글자 이하여야 합니다.` : '';

}
