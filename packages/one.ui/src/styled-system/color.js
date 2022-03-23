import {system} from '@styled-system/core';


const config = {
    background: {
        property: 'background',
        scale: 'colors',
    },
    bgColor: {
        property: 'background-color',
        scale: 'colors',
    },
    color: {
        property: 'color',
        scale: 'colors',
    },
    opacity: true,
};

config.bg = config.background;

export const color = system(config);
