const DISABLED = {
    cursor: 'default',
    pointerEvents: 'none',
};

export const Link = {
    baseStyle: {
        color: 'brand.primary',
        transitionProperty: 'property.colors',
        transitionDuration: 'duration.normal',
        transitionTimingFunction: 'easing.ease-out',

        textDecoration: 'underline',
        cursor: 'pointer',

        _hover: {
            textDecoration: 'none',
        },

        _disabled: {
            ...DISABLED,
            color: 'grey.500',
        },
    },
};
