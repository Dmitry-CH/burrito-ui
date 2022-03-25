import {system} from '@styled-system/core';


const config = {
    fontFamily: {
        property: 'font-family',
        scale: 'fonts',
    },
    fontSize: {
        property: 'font-size',
        scale: 'fontSizes',
    },
    fontStyle: {
        property: 'font-style',
    },
    fontWeight: {
        property: 'font-weight',
        scale: 'fontWeights',
    },
    lineHeight: {
        property: 'line-height',
        scale: 'lineHeights',
    },
    letterSpacing: {
        property: 'letter-spacing',
        scale: 'letterSpacings',
    },
    textAlign: {
        property: 'text-align',
    },
    textDecoration: {
        property: 'text-decoration',
    },
    textTransform: {
        property: 'text-transform',
    },
};

export const typography = system(config);
