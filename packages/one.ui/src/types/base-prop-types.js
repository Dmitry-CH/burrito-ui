import {
    object,
    optional,
    string,
} from 'superstruct';


export const baseTypes = object({
    // children
    className: optional(string()),
    id: optional(string()),
});

export const eventTypes = object({
    // onClick:
});
