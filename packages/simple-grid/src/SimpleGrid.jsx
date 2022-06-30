import * as R from 'ramda';
import {forwardRef} from 'react';

import {useComponentTheme, useDOMRefs, useValidateProps} from '@burrito-ui/shared';

import {Box} from '@burrito-ui/box';

import {useNormalizeProps} from './helpers/use-normalize-props';
import {SimpleGridTypes} from './prop-types';


export const SimpleGrid = forwardRef((props, ref) => {
    useValidateProps(props, SimpleGridTypes);

    const themeProps = useComponentTheme('SimpleGrid', props);

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
            display="grid"
            my={['0', null, '0']}
            w="100%"
        >
            {children}
        </Box>
    );
});

SimpleGrid.displayName = 'SimpleGrid';
