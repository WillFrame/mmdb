import {TextFields} from '../text-fields';

export type BooleanKeys = 'required';
export type NumberKeys = 'maxLength' | 'minLength';

export type RuleKeys = BooleanKeys | NumberKeys;

type RuleCallback = (value: number) => string;

type Rules =
    Record<BooleanKeys, string> &
    Record<NumberKeys, RuleCallback>;

export const RULES: Rules = {
    required: TextFields.RequiredField,
    maxLength: (value) => `${TextFields.MaxLength} ${value}`,
    minLength: (value) => `${TextFields.MinLength} ${value}`,
};
