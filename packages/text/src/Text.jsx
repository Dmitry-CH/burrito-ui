import * as R from 'ramda';
import {forwardRef} from 'react';

import {burrito} from '@burrito-ui/system';
import {useComponentTheme, useDOMRefs, useValidateProps} from '@burrito-ui/shared';

import {Box} from '@burrito-ui/box';

import {truncate} from './helpers/truncate';
import {useNormalizeProps} from './helpers/use-normalize-props';
import {TextTypes} from './prop-types';


const StyledText = burrito(Box, truncate, {
    shouldForwardProp: (prop) => !['isTruncated', 'numOfLines'].includes(prop),
});

export const Text = forwardRef((props, ref) => {
    useValidateProps(props, TextTypes);

    const themeProps = useComponentTheme('Text', props);

    const normalizedProps = useNormalizeProps(R.mergeAll([
        themeProps,
        props,
    ]));

    const {
        as = 'span',
        children,
        isTruncated = false,
        numOfLines = 1,
        ...otherProps
    } = normalizedProps;

    const domRef = useDOMRefs(ref);

    return (
        <StyledText
            {...otherProps}
            ref={domRef}
            forwardedAs={as}
            isTruncated={isTruncated}
            numOfLines={numOfLines}
        >
            {children}
        </StyledText>
    );
});

Text.displayName = 'Text';
StyledText.displayName = 'StyledText';
