import * as R from 'ramda';
import {useTheme} from './use-theme';

import {filterNotNilBy, isObject} from '../ramda-helpers';


export function useComponentTheme(themeKey, props) {
    const theme = useTheme();

    const componentTheme = R.path(['components', themeKey], theme);
    if (!isObject(componentTheme)) return {};

    const [size = '', variant = ''] = getComponentSettings([props, componentTheme]);

    return R.pipe(
        R.paths([
            ['baseStyle'],
            ['sizes', size],
            ['variants', variant],
        ]),
        R.mergeAll,
    )(componentTheme);
}

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
