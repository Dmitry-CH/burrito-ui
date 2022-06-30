import {system} from '@styled-system/core';


const config = {
    gridGap: {
        property: 'grid-gap',
        scale: 'space',
    },
    gridColumnGap: {
        property: 'grid-column-gap',
        scale: 'space',
    },
    gridRowGap: {
        property: 'grid-row-gap',
        scale: 'space',
    },
    gridArea: {
        property: 'grid-area',
    },
    gridAutoFlow: {
        property: 'grid-auto-flow',
    },
    gridAutoColumns: {
        property: 'grid-auto-columns',
    },
    gridAutoRows: {
        property: 'grid-auto-rows',
    },
    gridColumn: {
        property: 'grid-column',
    },
    gridColumnStart: true,
    gridColumnEnd: true,
    gridRow: {
        property: 'grid-row',
    },
    gridRowStart: true,
    gridRowEnd: true,
    gridTemplateAreas: {
        property: 'grid-template-areas',
    },
    gridTemplateColumns: {
        property: 'grid-template-columns',
    },
    gridTemplateRows: {
        property: 'grid-template-rows',
    },
};

export const grid = system(config);
