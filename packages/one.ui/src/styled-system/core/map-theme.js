import css from '@styled-system/css';


export function mapTheme(obj, theme) {
    return css(obj)(theme);
}
