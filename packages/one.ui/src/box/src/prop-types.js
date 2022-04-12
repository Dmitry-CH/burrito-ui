import {
    assign,
    boolean,
    dynamic,
    object,
    optional,
    pick,
    string,
    type,
} from 'superstruct';

import {BaseTypes, HTMLTypes, EventTypes, StyleTypes} from '@@types';


const CustomTypes = object({
    as: optional(string()),
    isRawHTML: optional(boolean()),
});

export const BoxTypes = dynamic(({as}) => {
    let DynamicTypes = HTMLTypes;

    if (as === 'a') {
        DynamicTypes = pick(HTMLTypes, [
            'coords',
            'download',
            'href',
            'hrefLang',
            'name',
            'rel',
            'shape',
            'target',
            'type',
        ]);
    }
    // if (as === ...) {
    //     DynamicTypes = pick(HTMLTypes, [
    //         ...
    //     ])
    // }

    return assign(
        type({}), // convert object -> type
        BaseTypes,
        DynamicTypes,
        EventTypes,
        StyleTypes,
        CustomTypes,
    );
});
