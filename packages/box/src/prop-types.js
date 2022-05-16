import {
    assign,
    boolean,
    dynamic,
    object,
    optional,
    // pick,
    string,
    type,
} from 'superstruct';

import {BaseTypes, HTMLTypes, EventTypes, StyleTypes} from '@burrito-ui/shared';


const CustomTypes = object({
    as: optional(string()),
    isRawHTML: optional(boolean()),
});

export const BoxTypes = dynamic(({as}) => {
    // let DynamicTypes = HTMLTypes;

    // if (as === 'a') {
    //     DynamicTypes = pick(HTMLTypes, [
    //         'coords',
    //         'download',
    //         'href',
    //         'hrefLang',
    //         'name',
    //         'rel',
    //         'shape',
    //         'target',
    //         'type',
    //     ]);
    // }

    return assign(
        type({}), // convert object -> type
        BaseTypes,
        HTMLTypes,
        EventTypes,
        StyleTypes,
        CustomTypes,
    );
});
