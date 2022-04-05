import {styledPropNames} from '../styled-system';
import {pseudoSelectors} from '../styled-system/pseudo';


export function shouldForwardProp(prop, defaultValidatorFn) {
    return defaultStyleValidatorFn(prop);
}

function defaultStyleValidatorFn(prop) {
    return !allNames.includes(prop);
}

const allNames = [
    ...styledPropNames.filter((name) => !['height', 'width'].includes(name)),
    ...Object.keys(pseudoSelectors),
];
