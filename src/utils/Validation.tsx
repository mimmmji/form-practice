
export interface ValidationRule {
    (value: string): string | '';
  }

export function validateInput(value: string, rules: ValidationRule[]): string | undefined {
    return rules.reduce((acc, rule) => acc || rule(value), '')
}

export function required(): ValidationRule {
  return (value: string) => (value ? '' : '필수 입력사항입니다.');
}

export function min (minLength: number): ValidationRule {
    return (value: string) => value && value.length < minLength ? `Error! 최소 ${minLength}글자 이상이여야 합니다` : '';
}

export function max (maxLength: number): ValidationRule {
    return (value: string) => value && value.length > maxLength ? `Error! 최대 ${maxLength}글자 이하여야 합니다.` : '';

}
