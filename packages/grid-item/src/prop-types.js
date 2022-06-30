import {
    array,
    assign,
    boolean,
    integer,
    nullable,
    object,
    optional,
    union,
} from 'superstruct';

import {BaseTypes, EventTypes, StyleTypes} from '@burrito-ui/shared';


const Responsive = union([integer(), array(nullable(integer()))]);

const CustomTypes = object({
    colSpan: optional(Responsive),
    colStart: optional(Responsive),
    colEnd: optional(Responsive),
    isRawHTML: optional(boolean()),
    rowSpan: optional(Responsive),
    rowStart: optional(Responsive),
    rowEnd: optional(Responsive),
});

export const GridItemTypes = assign(
    BaseTypes,
    EventTypes,
    StyleTypes,
    CustomTypes,
);
