import {system} from '@styled-system/core';


const config = {
    gap: {
        property: 'gap',
        scale: 'space',
    },
    columnGap: {
        property: 'column-gap',
        scale: 'space',
    },
    rowGap: {
        property: 'row-gap',
        scale: 'space',
    },
    alignContent: {
        property: 'align-content',
    },
    alignItems: {
        property: 'align-items',
    },
    alignSelf: {
        property: 'align-self',
    },
    justifyContent: {
        property: 'justify-content',
    },
    justifyItems: {
        property: 'justify-items',
    },
    justifySelf: {
        property: 'justify-self',
    },
    flex: {
        property: 'flex',
    },
    flexBasis: {
        property: 'flex-basis',
    },
    flexDirection: {
        property: 'flex-direction',
    },
    flexGrow: {
        property: 'flex-grow',
    },
    flexShrink: {
        property: 'flex-shrink',
    },
    flexWrap: {
        property: 'flex-wrap',
    },
    order: {
        property: 'order',
    },
};

export const flexbox = system(config);
