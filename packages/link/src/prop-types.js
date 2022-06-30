import {
    assign,
    boolean,
    integer,
    object,
    optional,
    string,
} from 'superstruct';

import {BaseTypes, EventTypes, StyleTypes} from '@burrito-ui/shared';


const CustomTypes = object({
    href: string(),
    isDisabled: optional(boolean()),
    isExternal: optional(boolean()),
    isRawHTML: optional(boolean()),
    isTruncated: optional(boolean()),
    leftIcon: optional(object({})),
    numOfLines: optional(integer()),
    rightIcon: optional(object({})),
});

export const LinkTypes = assign(
    BaseTypes,
    EventTypes,
    StyleTypes,
    CustomTypes,
);
