import {get, system} from '@styled-system/core';


const config = {
    margin: {
        property: 'margin',
        scale: 'space',
        transform: getMargin,
    },
    marginTop: {
        property: 'margin-top',
        scale: 'space',
        transform: getMargin,
    },
    marginRight: {
        property: 'margin-right',
        scale: 'space',
        transform: getMargin,
    },
    marginBottom: {
        property: 'margin-bottom',
        scale: 'space',
        transform: getMargin,
    },
    marginLeft: {
        property: 'margin-left',
        scale: 'space',
        transform: getMargin,
    },
    marginStart: {
        property: 'margin-inline-start',
        scale: 'space',
        transform: getMargin,
    },
    marginEnd: {
        property: 'margin-inline-end',
        scale: 'space',
        transform: getMargin,
    },
    marginX: {
        properties: ['margin-inline-start', 'margin-inline-end'],
        scale: 'space',
        transform: getMargin,
    },
    marginY: {
        properties: ['margin-top', 'margin-bottom'],
        scale: 'space',
        transform: getMargin,
    },
    padding: {
        property: 'padding',
        scale: 'space',
    },
    paddingTop: {
        property: 'padding-top',
        scale: 'space',
    },
    paddingRight: {
        property: 'padding-right',
        scale: 'space',
    },
    paddingBottom: {
        property: 'padding-bottom',
        scale: 'space',
    },
    paddingLeft: {
        property: 'padding-left',
        scale: 'space',
    },
    paddingStart: {
        property: 'padding-inline-start',
        scale: 'space',
    },
    paddingEnd: {
        property: 'padding-inline-end',
        scale: 'space',
    },
    paddingX: {
        properties: ['padding-inline-start', 'padding-inline-end'],
        scale: 'space',
    },
    paddingY: {
        properties: ['padding-top', 'padding-bottom'],
        scale: 'space',
    },
};

config.m = config.margin;
config.mt = config.marginTop;
config.mr = config.marginRight;
config.mb = config.marginBottom;
config.ml = config.marginLeft;
config.ms = config.marginStart;
config.me = config.marginEnd;
config.mx = config.marginX;
config.my = config.marginY;

config.p = config.padding;
config.pt = config.paddingTop;
config.pr = config.paddingRight;
config.pb = config.paddingBottom;
config.pl = config.paddingLeft;
config.ps = config.paddingStart;
config.pe = config.paddingEnd;
config.px = config.paddingX;
config.py = config.paddingY;

export const space = system(config);

// Helpers
const isNumber = (n) => (typeof n === 'number' && !isNaN(n));
const isNegative = (n) => (isNumber(n) && n < 0);

/**
 * Для корректного маппинга на 'theme.space',
 * так как margin может быть отрицательнымы (1 -> 4px, -1 -> -4px)
 */
function getMargin(n, scale) {
    if (!isNumber(n)) { // default transform case
        return get(scale, n, n);
    }

    const absN = Math.abs(n);
    const value = get(scale, absN, absN);

    if (!isNumber(value)) {
        return isNegative(n) ? '-' + value : value;
    }

    return value * (isNegative(n) ? -1 : 1)
};
