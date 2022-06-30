import {
    assign,
    boolean,
    func,
    integer,
    number,
    object,
    optional,
    string,
    union,
} from 'superstruct';

import {BaseTypes, EventTypes, StyleTypes} from '@burrito-ui/shared';


const CustomTypes = object({
    children: union([number(), string()]),
    currency: optional(string()),
    customFormat: optional(func()),
    isRawHTML: optional(boolean()),
    isTruncated: optional(boolean()),
    locale: optional(string()),
    numOfLines: optional(integer()),
});

export const PriceTypes = assign(
    BaseTypes,
    EventTypes,
    StyleTypes,
    CustomTypes,
);
