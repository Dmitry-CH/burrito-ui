import {
    assign,
    boolean,
    func,
    integer,
    object,
    optional,
    string,
} from 'superstruct';

import {BaseTypes, EventTypes, StyleTypes} from '@burrito-ui/shared';


const CustomTypes = object({
    children: string(),
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
