import {system} from '@styled-system/core';


const config = {
    backgroundClip: {
        property: 'background-clip',
    },
    bgGradient: {
        property: 'background-image',
    },
};

config.bgClip = config.backgroundClip;

export const gradient = system(config);
