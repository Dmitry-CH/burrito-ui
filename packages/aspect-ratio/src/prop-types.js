import {
    array,
    assign,
    boolean,
    nullable,
    object,
    optional,
    string,
    union,
} from 'superstruct';

import {BaseTypes, EventTypes, StyleTypes} from '@burrito-ui/shared';


const CustomTypes = object({
    isRawHTML: optional(boolean()),
    ratio: optional(union([string(), array(nullable(string()))])),
});

export const AspectRatioTypes = assign(
    BaseTypes,
    EventTypes,
    StyleTypes,
    CustomTypes,
);
