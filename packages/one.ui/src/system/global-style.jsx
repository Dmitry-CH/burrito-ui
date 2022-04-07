import * as R from 'ramda';
import {useMemo} from 'react';
import {createGlobalStyle} from 'styled-components';

import {useTheme} from '@@utils';

import {mapToTheme} from '../styled-system';
import {generateFontFace} from './generate-font-face';


export const GlobalStyle = () => {
    const theme = useTheme();

    const [fontCSS, rootCSS] = R.juxt([
        R.pipe(
            R.propOr([], 'fontFace'),
            generateFontFace,
        ),
        R.pipe(
            R.pathOr({}, ['styles', 'global']),
            R.flip(mapToTheme)(theme),
        ),
    ])(theme);

    const Global = useMemo(() => createGlobalStyle`
        ${fontCSS}
        ${rootCSS}
    `, []);

    if (typeof __DEV__ !== 'undefined' && __DEV__) {
        Global.displayName = 'Global';
    }

    return (
        <Global />
    );
};

if (typeof __DEV__ !== 'undefined' && __DEV__) {
    GlobalStyle.displayName = 'GlobalStyle';
}
