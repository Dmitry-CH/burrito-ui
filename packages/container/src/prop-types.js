import {
    assign,
    boolean,
    literal,
    object,
    optional,
    union,
} from 'superstruct';

import {BaseTypes, EventTypes, StyleTypes} from '@burrito-ui/shared';


const CustomTypes = object({
    isRawHTML: optional(boolean()),
    posX: optional(union([literal('left'), literal('center'), literal('right')])),
    posY: optional(union([literal('top'), literal('center'), literal('bottom')])),
});

export const ContainerTypes = assign(
    BaseTypes,
    EventTypes,
    StyleTypes,
    CustomTypes,
);
