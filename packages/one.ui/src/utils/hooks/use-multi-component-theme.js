import * as R from 'ramda';
import {useTheme} from './use-theme';

import {filterNotNilBy, isObject} from '../ramda-helpers';


export function useMultiComponentTheme(themeKey, props) {
    const theme = useTheme();

    const componentTheme = R.path(['components', themeKey], theme);
    if (!isObject(componentTheme)) return {};

    const [size = '', variant = ''] = getComponentSettings([props, componentTheme]);

    const resolvePart = (componentTheme) => R.map((part) => R.pipe(
        R.paths([
            ['baseStyle', part],
            ['sizes', size, part],
            ['variants', variant, part],
        ]),
        R.mergeAll,
    )(componentTheme));

    return R.converge(
        R.zipObj, [
            getParts,
            R.ap(resolvePart, getParts),
        ],
    )(componentTheme);
}

const getParts = R.propOr([], 'parts');

const compose = R.o(
    filterNotNilBy(R.head),
);

const getComponentSettings = R.juxt([
    compose(R.paths([
        [0, 'size'],
        [1, 'defaultProps', 'size'],
    ])),
    compose(R.paths([
        [0, 'variant'],
        [1, 'defaultProps', 'variant'],
    ])),
]);
