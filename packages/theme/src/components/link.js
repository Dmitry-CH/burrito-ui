const DISABLED = {
    cursor: 'default',
    pointerEvents: 'none',
};

export const Link = {
    baseStyle: {
        color: 'inherit',
        cursor: 'pointer',
        textDecoration: 'underline',

        transitionProperty: 'property.colors',
        transitionDuration: 'duration.normal',
        transitionTimingFunction: 'easing.ease-out',

        _hover: {
            textDecoration: 'none',
        },

        _disabled: {
            ...DISABLED,
            color: 'grey.500',
        },
    },
};
