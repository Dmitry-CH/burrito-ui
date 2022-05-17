import * as R from 'ramda';
import {forwardRef} from 'react';

import {burrito} from '@burrito-ui/system';
import {useComponentTheme, useDOMRefs, useValidateProps} from '@burrito-ui/shared';

import {Box} from '@burrito-ui/box';

import {ratio} from './helpers/ratio';
import {useNormalizeProps} from './helpers/use-normalize-props';
import {AspectRatioTypes} from './prop-types';


const StyledAspectRatio = burrito(Box, ratio, {
    shouldForwardProp: (prop) => !['ratio'].includes(prop),
});

export const AspectRatio = forwardRef((props, ref) => {
    useValidateProps(props, AspectRatioTypes);

    const themeProps = useComponentTheme('AspectRatio', props);

    const normalizedProps = useNormalizeProps(R.mergeAll([
        themeProps,
        props,
    ]));

    const {
        children,
        ratio = '16x9',
        ...otherProps
    } = normalizedProps;

    const domRef = useDOMRefs(ref);

    return (
        <StyledAspectRatio
            {...otherProps}
            ref={domRef}
            ratio={ratio}
        >
            {children}
        </StyledAspectRatio>
    );
});

AspectRatio.displayName = 'AspectRatio';
StyledAspectRatio.displayName = 'StyledAspectRatio';
