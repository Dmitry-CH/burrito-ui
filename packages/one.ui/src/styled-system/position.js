import {system} from '@styled-system/core';


const config = {
    position: {
        property: 'position',
    },
    zIndex: {
        property: 'z-index',
        scale: 'zIndices',
    },
    top: {
        property: 'top',
        scale: 'space',
    },
    right: {
        property: 'right',
        scale: 'space',
    },
    bottom: {
        property: 'bottom',
        scale: 'space',
    },
    left: {
        property: 'left',
        scale: 'space',
    },
};

config.pos = config.position;

export const position = system(config);
