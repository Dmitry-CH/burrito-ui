export function shouldForwardProp(prop, defaultValidatorFn) {
    return true && defaultValidatorFn(prop);
}
