import * as R from 'ramda';
import {forwardRef} from 'react';

import {useComponentTheme, useDOMRefs, useValidateProps} from '@burrito-ui/shared';

import {Box} from '@burrito-ui/box';

import {useNormalizeProps} from './helpers/use-normalize-props';
import {ContainerTypes} from './prop-types';


export const Container = forwardRef((props, ref) => {
    useValidateProps(props, ContainerTypes);

    const themeProps = useComponentTheme('Container', props);

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
            display="flex"
            my={['0', null, '0']}
            w="100%"
        >
            {children}
        </Box>
    );
});

Container.displayName = 'Container';
