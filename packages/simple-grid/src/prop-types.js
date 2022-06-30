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
    columns: optional(Responsive),
    isRawHTML: optional(boolean()),
    rows: optional(Responsive),
    spacing: optional(Responsive),
    spacingX: optional(Responsive),
    spacingY: optional(Responsive),
});

export const SimpleGridTypes = assign(
    BaseTypes,
    EventTypes,
    StyleTypes,
    CustomTypes,
);
