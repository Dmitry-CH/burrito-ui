import {
    assign,
    boolean,
    object,
    omit,
    optional,
    string,
} from 'superstruct';

import {BaseTypes, EventTypes, StyleTypes} from '@burrito-ui/shared';


const CustomTypes = object({
    as: optional(string()),
    href: string(),
    isExternal: optional(boolean()),
    isRawHTML: optional(boolean()),
});

export const LinkBoxTypes = assign(
    BaseTypes,
    EventTypes,
    StyleTypes,
    omit(CustomTypes, ['href', 'isExternal']),
);

export const LinkOverlayTypes = assign(
    BaseTypes,
    EventTypes,
    StyleTypes,
    omit(CustomTypes, ['as']),
);
