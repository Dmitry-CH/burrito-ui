import {
    array,
    assign,
    boolean,
    string,
    object,
    optional,
    union,
} from 'superstruct';

import {BaseTypes, EventTypes, StyleTypes} from '@burrito-ui/shared';


const CustomTypes = object({
    isRawHTML: optional(boolean()),
    ratio: optional(union([string(), array(string())])),
});

export const AspectRatioTypes = assign(
    BaseTypes,
    EventTypes,
    StyleTypes,
    CustomTypes,
);
