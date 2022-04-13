import {system} from '@styled-system/core';


const config = {
    backgroundAttachment: {
        property: 'background-attachment',
    },
    backgroundImage: {
        property: 'background-image',
    },
    backgroundPosition: {
        property: 'background-position',
    },
    backgroundRepeat: {
        property: 'background-repeat',
    },
    backgroundSize: {
        property: 'background-size',
    },
};

config.bgAttach = config.backgroundAttachment;
config.bgImage = config.backgroundImage;
config.bgPosition = config.backgroundPosition;
config.bgRepeat = config.backgroundRepeat;
config.bgSize = config.backgroundSize;

export const background = system(config);
