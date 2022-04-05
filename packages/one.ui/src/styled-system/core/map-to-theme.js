import css from '@styled-system/css';


export function mapToTheme(obj, theme) {
    return css(obj)(theme);
}
