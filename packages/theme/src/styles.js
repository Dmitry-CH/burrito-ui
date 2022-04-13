export const styles = {
    global: {
        '::selection': {
            bg: 'grey.900',
            color: 'white',
        },
        ':root': {
            boxSizing: 'border-box',
        },
        '*, *::before, *::after': {
            boxSizing: 'inherit',
        },
        body: {
            bg: 'white',
            color: 'grey.900',
            fontFamily: 'body',
            fontStyle: 'normal',
            fontWeight: 'light',
            fontSize: 'base',
            lineHeight: 'base',
        },
        '[hidden]': {
            display: 'none !important',
        },
    },
};
