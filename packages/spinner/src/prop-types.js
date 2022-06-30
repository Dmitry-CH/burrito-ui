import {
    assign,
    boolean,
    object,
    optional,
    string,
} from 'superstruct';

import {BaseTypes, EventTypes, StyleTypes} from '@burrito-ui/shared';


const CustomTypes = object({
    duration: optional(string()),
    isLoading: optional(boolean()),
    size: optional(string()),
});

export const SpinnerTypes = assign(
    BaseTypes,
    EventTypes,
    StyleTypes,
    CustomTypes,
);
