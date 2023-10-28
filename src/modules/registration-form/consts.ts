import {getValidationRule} from '../../lib/utils/get-validation-rule';
import {FormValues} from './types';

export const DEFAULT_FORM_VALUES: FormValues = {
    login: '',
    password: '',
};

export const VALIDATION_RULES = getValidationRule({
    required: true,
    maxLength: 20,
    minLength: 8,
});
