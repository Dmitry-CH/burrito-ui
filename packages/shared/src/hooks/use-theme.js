import {useContext} from 'react';
import {ThemeContext} from 'styled-components';

import {isObject} from '../ramda-helpers';


export function useTheme() {
    const theme = useContext(ThemeContext);

    if (isObject(theme)) {
        return theme;
    }

    console.warn([
        '[@burrito-ui/shared][useTheme][Warn]:',
        'Передайте объект темы в `<ThemeProvider />`',
    ].join(' '));

    return {};
}
