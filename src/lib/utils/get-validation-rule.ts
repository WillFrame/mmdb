import {BooleanKeys, NumberKeys, RULES, RuleKeys} from '../configs/validation-rules';

type ValidationRule = {
    value: boolean | number;
    message: string;
};

export const getValidationRule = (values: Partial<Record<RuleKeys, number | true>>) => (
    Object.entries(values).reduce<Partial<Record<RuleKeys, ValidationRule>>>((prev, [key, value]) => (
        {
            [key]: {
                value: value,
                message: typeof value === 'boolean' ? RULES[key as BooleanKeys] : RULES[key as NumberKeys](value),
            },
            ...prev,
        }
    ), {})
) as object;
