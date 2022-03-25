import {
    object,
    optional,
    string,
} from 'superstruct';


export const styleTypes = object({
    color: optional(string()),
});
