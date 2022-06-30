export const overlayBox = {
    sx: {
        position: 'relative',

        'a[href]:not(.link-overlay), abbr[title]': {
            position: 'relative',
            zIndex: '1',
        },
    },
};

export const overlayLink = {
    sx: {
        '&::before': {
            content: '""',

            zIndex: 'base',
            position: 'absolute',
            top: 0,
            left: 0,
            display: 'block',
            width: '100%',
            height: '100%',
            cursor: 'inherit',
        },
    },
};
