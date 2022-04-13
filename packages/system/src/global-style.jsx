import * as R from 'ramda';
import {createGlobalStyle} from 'styled-components';

import {useTheme} from '@burrito-ui/shared';
import {mapToTheme} from '@burrito-ui/styled-system';

import {generateFontFace} from './generate-font-face';


export const CreateGlobalStyle = () => {
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

    const GlobalStyle = createGlobalStyle`
        ${fontCSS}
        ${rootCSS}
    `;

    GlobalStyle.displayName = 'GlobalStyle';

    return (
        <GlobalStyle />
    );
};

CreateGlobalStyle.displayName = 'CreateGlobalStyle';
