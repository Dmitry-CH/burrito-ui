import {styledPropNames} from '@burrito-ui/styled-system';

import {pseudoSelectors} from './parse-pseudo';


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
