type ParameterType = Record<any, any> | Array<any>;

export const isEmpty = (value: ParameterType) => (
    Boolean(Object.values(value).length)
);
