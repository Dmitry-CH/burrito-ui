import {
    assign,
    boolean,
    integer,
    literal,
    object,
    optional,
    union,
} from 'superstruct';

import {BaseTypes, EventTypes, StyleTypes} from '@burrito-ui/shared';


const CustomTypes = object({
    isRawHTML: optional(boolean()),
    isTruncated: optional(boolean()),
    level: optional(union([literal('1'), literal('2'), literal('3'), literal('4'), literal('5'), literal('6')])),
    numOfLines: optional(integer()),
    semantic: optional(boolean()),
});

export const HeadingTypes = assign(
    BaseTypes,
    EventTypes,
    StyleTypes,
    CustomTypes,
);
