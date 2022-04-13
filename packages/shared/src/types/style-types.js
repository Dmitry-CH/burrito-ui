import * as R from 'ramda';
import {
    array,
    nullable,
    number,
    object,
    optional,
    string,
    union,
} from 'superstruct';

import {styledPropNames} from '@burrito-ui/styled-system';


const ResponsiveTypes = array(
    nullable(
        union([
            number(),
            string(),
        ])
    )
);

const CSSTypes = optional(
    union([
        number(),
        string(),
        ResponsiveTypes,
    ])
);

export const StyleTypes = object(
    R.fromPairs(
        R.xprod(styledPropNames, [CSSTypes])
    )
);
