import * as R from 'ramda';
import {forwardRef} from 'react';

import {ui} from '@@system';
import {useDOMRefs, useComponentTheme, useValidateProps} from '@@utils';

import {Box} from '../../box';

import {truncate} from './helpers/truncate';
import {useNormalizeProps} from './helpers/use-normalize-props';
import {TextTypes} from './prop-types';


const StyledText = ui(Box, truncate, {
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

if (typeof __DEV__ !== 'undefined' && __DEV__) {
    Text.displayName = 'Text';
    StyledText.displayName = 'StyledText';
}
