export function shouldForwardProp(prop, defaultValidatorFn) {
    return defaultStyleValidator(prop);
}

function defaultStyleValidator(prop) {
    return !['w', 'h'].includes(prop);
}
