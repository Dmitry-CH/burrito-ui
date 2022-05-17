import {
    assign,
    boolean,
    func,
    integer,
    object,
    optional,
} from 'superstruct';

import {BaseTypes, EventTypes, StyleTypes} from '@burrito-ui/shared';


const CustomTypes = object({
    customFormat: optional(func()),
    isRawHTML: optional(boolean()),
    isTruncated: optional(boolean()),
    numOfLines: optional(integer()),
});

export const ContactTypes = assign(
    BaseTypes,
    EventTypes,
    StyleTypes,
    CustomTypes,
);
