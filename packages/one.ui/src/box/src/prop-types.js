import {
    assign,
    boolean,
    object,
    optional,
    string,
} from 'superstruct';

import {baseTypes, eventTypes, styleTypes} from '@@types';


export const customTypes = object({
    as: optional(string()),
    isRawHTML: optional(boolean()),
});

export const boxTypes = assign(
    baseTypes,
    eventTypes,
    styleTypes,
    customTypes,
);
