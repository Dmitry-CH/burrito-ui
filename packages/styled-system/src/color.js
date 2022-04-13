import {system} from '@styled-system/core';


const config = {
    background: {
        property: 'background',
        scale: 'colors',
    },
    backgroundColor: {
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
config.bgColor = config.backgroundColor;

export const color = system(config);
