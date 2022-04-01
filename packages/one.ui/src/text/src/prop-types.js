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
});

export const textTypes = assign(
    baseTypes,
    eventTypes,
    styleTypes,
    customTypes,
);
