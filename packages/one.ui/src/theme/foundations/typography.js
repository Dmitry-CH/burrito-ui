const DEFAULT_FONTS = [
    // Safari for macOS and iOS (San Francisco)
    '-apple-system',
    // Chrome < 56 for macOS (San Francisco)
    'BlinkMacSystemFont',
    // Windows
    'Segoe UI',
    // Android
    'Roboto',
    // Basic web fallback
    'Helvetica Neue', 'Arial', 'sans-serif',
    // Emoji fonts
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
];

export const typography = {
    fonts: {
        heading: `Montserrat,${DEFAULT_FONTS.join()}`,
        body: `Montserrat,${DEFAULT_FONTS.join()}`,
        accent: `Montserrat,${DEFAULT_FONTS.join()}`,
    },

    fontWeights: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
    },

    fontSizes: {
        mini: '10px',
        xSmall: '10px',
        smallPlus: '12px',
        small: '14px',
        medium: '16px',
        base: '16px',
        large: '18px',
        largePlus: '20px',
        xLarge: '22px',
        xLargePlus: '24px',
        xxLarge: '28px',
        xxLargePlus: '32px',
        xxxLarge: '36px',
        superLarge: '44px',
        mega: '52px',
    },

    lineHeights: {
        mini: '12px',
        xSmall: '12px',
        smallPlus: '16px',
        small: '20px',
        medium: '24px',
        base: '24px',
        large: '24px',
        largePlus: '28px',
        xLarge: '28px',
        xLargePlus: '32px',
        xxLarge: '36px',
        xxLargePlus: '40px',
        xxxLarge: '44px',
        superLarge: '48px',
        mega: '64px',
    },
};

export const fontFace = [
    ['Montserrat', [
        300, 'normal', // font-weight, font-style
        400, 'normal',
        700, 'normal',
    ]],
];
