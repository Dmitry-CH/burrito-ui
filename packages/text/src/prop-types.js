import {
    assign,
    boolean,
    integer,
    object,
    optional,
    string,
    type,
} from 'superstruct';

import {BaseTypes, HTMLTypes, EventTypes, StyleTypes} from '@burrito-ui/shared';


const CustomTypes = object({
    as: optional(string()),
    isRawHTML: optional(boolean()),
    isTruncated: optional(boolean()),
    numOfLines: optional(integer()),
});

export const TextTypes = assign(
    type({}), // convert object -> type
    BaseTypes,
    HTMLTypes,
    EventTypes,
    StyleTypes,
    CustomTypes,
);
