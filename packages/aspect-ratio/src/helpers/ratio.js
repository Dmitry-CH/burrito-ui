export function ratio(props) {
    return {
        sx: {
            position: 'relative',

            ...parseRatio(props),

            '& > *': {
                position: 'absolute',
                top: 0,
                left: 0,

                display: 'flex',
                'align-items': 'center',
                'justify-content': 'center',
                width: '100%',
                height: '100%',

                overflow: 'hidden',

                '& > *:not(source):not([src*="base64"])': { // ...
                    width: '100%',
                    height: '100%',
                },
            },
        },
    };
}

const parseRatio = ({ratio, theme = {}}) => {
    const css = {
        '&::before': {
            content: '""',
            display: 'block',
        },
    };

    if (Array.isArray(ratio)) {
        css['&::before']['padding-bottom'] = makeRatio(ratio[0]);

        const {breakpoints = []} = theme;

        for (let i = 1; i < ratio.length; i++) {
            if (ratio[i] == null) continue;

            css[`@media screen and (min-width: ${breakpoints[i - 1]})`] = {
                '&::before': {
                    'padding-bottom': makeRatio(ratio[i]),
                },
            };
        }

        return css;
    }

    css['&::before']['padding-bottom'] = makeRatio(ratio);

    return css;
};

const makeRatio = (ratio) => {
    const [w, h] = ratio.split('x');

    return `calc(${h} / ${w} * 100%)`;
};
