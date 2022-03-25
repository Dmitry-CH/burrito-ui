import {system} from '@styled-system/core';


const config = {
    boxSize: {
        properties: ['width', 'height'],
        scale: 'sizes',
    },
    display: {
        property: 'display',
    },
    width: {
        property: 'width',
        scale: 'sizes',
    },
    height: {
        property: 'height',
        scale: 'sizes',
    },
    minWidth: {
        property: 'min-width',
        scale: 'sizes',
    },
    maxWidth: {
        property: 'max-width',
        scale: 'sizes',
    },
    minHeight: {
        property: 'min-height',
        scale: 'sizes',
    },
    maxHeight: {
        property: 'max-height',
        scale: 'sizes',
    },
    overflow: {
        property: 'overflow',
    },
    overflowX: {
        property: 'overflowX',
    },
    overflowY: {
        property: 'overflowY',
    },
    verticalAlign: {
        property: 'vertical-align',
    },
};

config.d = config.display;
config.w = config.width;
config.h = config.height;
config.minW = config.minWidth;
config.maxW = config.maxWidth;
config.minH = config.minHeight;
config.maxH = config.maxHeight;

export const layout = system(config);
