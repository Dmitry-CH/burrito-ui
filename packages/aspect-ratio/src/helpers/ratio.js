export function ratio(props) {
    return {
        sx: {
            position: 'relative',

            '&::before': {
                content: '""',
                display: 'block',
            },

            ...createCSSObject(props),

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

const createCSSObject = ({ratio, theme = {}}) => {
    if (Array.isArray(ratio)) {
        const {breakpoints = []} = theme;
        const media = {};

        ratio.forEach((rt, i) => {
            if (rt == null) return;

            media[`@media screen and (min-width: ${breakpoints[i]})`] = {
                '&::before': {
                    'padding-bottom': makeRatio(rt),
                },
            };
        });

        return media;
    }

    return {
        '&::before': {
            content: '""',
            display: 'block',
            'padding-bottom': makeRatio(ratio),
        },
    };
};

const makeRatio = (ratio) => {
    const [w, h] = ratio.split('x');

    return `calc(${h} / ${w} * 100%)`;
};
