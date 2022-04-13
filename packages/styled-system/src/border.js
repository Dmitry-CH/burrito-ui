import {system} from '@styled-system/core';


const config = {
    border: {
        property: 'border',
        scale: 'borders',
    },
    borderColor: {
        property: 'border-color',
        scale: 'colors',
    },
    borderStyle: {
        property: 'border-style',
    },
    borderWidth: {
        property: 'border-width',
    },
    borderTop: {
        property: 'border-top',
        scale: 'borders',
    },
    borderTopColor: {
        property: 'border-top-color',
        scale: 'colors',
    },
    borderTopStyle: {
        property: 'border-top-style',
    },
    borderTopWidth: {
        property: 'border-top-width',
    },
    borderRight: {
        property: 'border-right',
        scale: 'borders',
    },
    borderRightColor: {
        property: 'border-right-color',
        scale: 'colors',
    },
    borderRightStyle: {
        property: 'border-right-style',
    },
    borderRightWidth: {
        property: 'border-right-width',
    },
    borderBottom: {
        property: 'border-bottom',
        scale: 'borders',
    },
    borderBottomColor: {
        property: 'border-bottom-color',
        scale: 'colors',
    },
    borderBottomStyle: {
        property: 'border-bottom-style',
    },
    borderBottomWidth: {
        property: 'border-bottom-width',
    },
    borderLeft: {
        property: 'border-left',
        scale: 'borders',
    },
    borderLeftColor: {
        property: 'border-left-color',
        scale: 'colors',
    },
    borderLeftStyle: {
        property: 'border-left-style',
    },
    borderLeftWidth: {
        property: 'border-left-width',
    },
    borderStart: {
        property: 'border-inline-start',
        scale: 'borders',
    },
    borderStartColor: {
        property: 'border-inline-start-color',
        scale: 'colors',
    },
    borderStartStyle: {
        property: 'border-inline-start-style',
    },
    borderStartWidth: {
        property: 'border-inline-start-width',
    },
    borderEnd: {
        property: 'border-inline-end',
        scale: 'borders',
    },
    borderEndColor: {
        property: 'border-inline-end-color',
        scale: 'colors',
    },
    borderEndStyle: {
        property: 'border-inline-end-style',
    },
    borderEndWidth: {
        property: 'border-inline-end-width',
    },
    borderX: {
        properties: ['border-inline-start', 'border-inline-end'],
        scale: 'borders',
    },
    borderY: {
        properties: ['border-top', 'border-bottom'],
        scale: 'borders',
    },
    borderRadius: {
        property: 'border-radius',
        scale: 'radii',
    },
    borderTopRadius: {
        properties: ['border-top-left-radius', 'border-top-right-radius'],
        scale: 'radii',
    },
    borderRightRadius: {
        properties: ['border-top-right-radius', 'border-bottom-right-radius'],
        scale: 'radii',
    },
    borderBottomRadius: {
        properties: ['border-bottom-left-radius', 'border-bottom-right-radius'],
        scale: 'radii',
    },
    borderLeftRadius: {
        properties: ['border-top-left-radius', 'border-bottom-left-radius'],
        scale: 'radii',
    },
    borderTopLeftRadius: {
        property: 'border-top-left-radius',
        scale: 'radii',
    },
    borderTopRightRadius: {
        property: 'border-top-right-radius',
        scale: 'radii',
    },
    borderBottomRightRadius: {
        property: 'border-bottom-right-radius',
        scale: 'radii',
    },
    borderBottomLeftRadius: {
        property: 'border-bottom-left-radius',
        scale: 'radii',
    },
};

export const border = system(config);
