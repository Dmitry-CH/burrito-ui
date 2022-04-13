import {system} from '@styled-system/core';


const config = {
    boxShadow: {
        property: 'box-shadow',
        scale: 'shadows',
    },
    textShadow: {
        property: 'text-shadow',
        scale: 'shadows',
    },
};

config.shadow = config.boxShadow;

export const shadow = system(config);
