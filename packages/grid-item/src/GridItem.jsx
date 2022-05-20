import * as R from 'ramda';
import {forwardRef} from 'react';

import {useComponentTheme, useDOMRefs, useValidateProps} from '@burrito-ui/shared';

import {Box} from '@burrito-ui/box';

import {useNormalizeProps} from './helpers/use-normalize-props';
import {GridItemTypes} from './prop-types';


export const GridItem = forwardRef((props, ref) => {
    useValidateProps(props, GridItemTypes);

    const themeProps = useComponentTheme('GridItem', props);

    const normalizedProps = useNormalizeProps(R.mergeAll([
        themeProps,
        props,
    ]));

    const {
        children,
        ...otherProps
    } = normalizedProps;

    const domRef = useDOMRefs(ref);

    return (
        <Box
            {...otherProps}
            ref={domRef}
        >
            {children}
        </Box>
    );
});

GridItem.displayName = 'GridItem';
